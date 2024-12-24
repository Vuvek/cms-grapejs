"use client";
import React, { Fragment, useEffect, useState } from "react";
import ImageSlider from "@/components/customImageSlider/sliderComponents";
import SrollableLogos from "@/components/scrollableLogos/scrollableLogos";
import FeaturedCategory from "../featuredCategory/featuredCategory";
import BrAlphabet from "../brAlphabet/brAlphabet";
import LogoListing from "../logoLisitng/logoListing";
import Faq from "../faq/faq";
import Review from "../review/review";
import Slides from "../slides/slides";
import ConstantSlides from "../constatntSlidesScroll/constantSlides";
import HorizontalSliderWithScroll from "../horizontalSlideScroll/horizantalSlide";
import ConstantHorizantalScroll from "../constantHorizantalScroll/constantHorizantalScroll";
import DotSlideScroll from "../dotsSlideScroll/dotSlideScroll";
import TabSection from "../tabs/tabs";
import SimpleSlider from "../simpleSlider/simpleSlider";

const renderComponent = (component: any, index: number) => {
  if (component.type === "textnode") {
    return component.content;
  }

  const { tagName, type, components, attributes, classes } = component;
  const Tag = tagName || "div";

  const classNameValue = Array.isArray(classes)
    ? classes
        .map((cls: any) => (typeof cls === "string" ? cls : cls.name || ""))
        .filter(Boolean)
        .join(" ")
    : typeof classes === "object" && classes.className
    ? classes.className
    : "";

  const elementProps = {
    className: classNameValue,
    ...attributes,
  };

  if (type === "image") {
    return (
      <img
        key={`component-${index}`}
        id={attributes?.id}
        src={attributes?.src}
        alt={attributes?.alt || "image"}
        className={classes?.map((cls: any) => cls.name).join(" ")}
      />
    );
  }

  if (type === "button") {
    return (
      <button key={`component-${index}`} {...attributes} disabled>
        {components && components.map(renderComponent)}
      </button>
    );
  }
  if (type === "video") {
    if (component?.provider === "vi") {
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            height:'100vh',
            paddingTop: "50.25%", // Maintain 16:9 aspect ratio
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            src={`${component?.src}?autoplay=1&muted=1&background=1`} // Ensure correct Vimeo params
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>
      );
    } else {
      return (
        <video
          key={`component-${index}`}
          src={component?.attributes.src}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto", // Ensures the video maintains its aspect ratio
          }}
        ></video>
      );
    }
  }

  if (type === "link") {
    return (
      <a
        key={`component-${index}`}
        href={attributes?.href || "#"}
        {...attributes}
      >
        {components && components.map(renderComponent)}
      </a>
    );
  }

  if (type === "slides") {
    return <Slides key={`component-${index}`} />;
  }
  if (type === "faq-section") {
    return <Faq key={`component-${index}`} />;
  } else if (type === "custom-code") {
    return (
      <Fragment key={`component-${index}`}>
        <div
          dangerouslySetInnerHTML={{
            __html: component["custom-code-plugin__code"],
          }}
        />
      </Fragment>
    );
  } else if (type === "slides") {
    return <Slides key={`component-${index}`} />;
  } else if (type == "constant-slides") {
    return <ConstantSlides key={`component-${index}`} />;
  } else if (type == "horizontal-slides") {
    return <HorizontalSliderWithScroll key={`component-${index}`} />;
  } else if (type == "constant-horizantal-slides") {
    return <ConstantHorizantalScroll key={`component-${index}`} />;
  } else if (type == "dots-slides") {
    return <DotSlideScroll key={`component-${index}`} />;
  } else if (type == "tab") {
    return <TabSection key={`component-${index}`} />;
  } else if (type == "simple-slider") {
    return <SimpleSlider key={`component-${index}`} />;
  }

  return (
    <Tag key={`component-${index}`} {...elementProps}>
      {components &&
        components.map((child: any, idx: number) =>
          renderComponent(child, idx)
        )}
    </Tag>
  );
};

const Preview = ({ pageId }: { pageId: string }) => {
  const [finalData, setFinalData] = useState<any>([]);
  const [stylesData, setStylesData] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/loadGrapesData?id=${pageId || "grapesjs"}`
        );
        const data = await response.json();
        setFinalData(data.data.data.pages[0].frames[0].component.components);
        setStylesData(data.data.data.styles);
      } catch (error) {
        console.error("Error loading component data:", error);
      }
    };

    fetchData();
  }, [pageId]);

  useEffect(() => {
    if (stylesData) {
      const styleTag = document.createElement("style");
      styleTag.textContent = stylesData
        .map((style: any) => {
          const cssString = Object.entries(style.style)
            .map(([key, value]) => `${key}: ${value};`)
            .join(" ");

          const selector = style.selectors[0].name
            ? `.${style.selectors[0].name}`
            : `${style.selectors}`;

          if (style.mediaText) {
            return `@media ${style.mediaText} { ${selector} {${cssString}}}`;
          } else if (style.state === "hover") {
            return `${selector}:hover {${cssString}}`;
          } else {
            return `${selector} {${cssString}}`;
          }
        })
        .join(" ");
      document.head.appendChild(styleTag);

      return () => {
        document.head.removeChild(styleTag);
      };
    }
  }, [stylesData]);

  return (
    <div>
      {finalData.map((item: any, index: number) => {
        if (item.type === "custom-slider") {
          return (
            <ImageSlider
              slides={item.attributes?.slides}
              key={`component-${index}`}
            />
          );
        } else if (item.type === "Slider-logos") {
          return (
            <SrollableLogos
              slides={item.attributes?.logoSlides}
              key={`component-${index}`}
            />
          );
        } else if (item.type === "custom-code") {
          // return (
          //   <>
          //     <div dangerouslySetInnerHTML={{__html : item['custom-code-plugin__code']}}/>
          //   </>
          // )
          console.log("Custommmmmmmmmmmmmmm Codeeeeeeeee");
          return (
            <>
              <h1>hello</h1>
            </>
          );
        } else if (item.type === "slides") {
          return <Slides key={`component-${index}`} />;
        } else if (item.type == "constant-slides") {
          return <ConstantSlides key={`component-${index}`} />;
        } else if (item.type == "horizontal-slides") {
          return <HorizontalSliderWithScroll key={`component-${index}`} />;
        } else if (item.type == "constant-horizantal-slides") {
          return <ConstantHorizantalScroll key={`component-${index}`} />;
        } else if (item.type == "dots-slides") {
          return <DotSlideScroll key={`component-${index}`} />;
        } else if (item.type == "tab") {
          return <TabSection key={`component-${index}`} />;
        } else if (item.type == "simple-slider") {
          return <SimpleSlider key={`component-${index}`} />;
        } else if (item.type == "dynamic-products") {
          return (
            <FeaturedCategory
              key={`component-${index}`}
              serverSideData={item?.attributes?.serverSideData}
            />
          );
        } else if (item.type === "logo-listing") {
          return <LogoListing key={`component-${index}`} />;
        } else if (item.type === "alphabet-listing-section") {
          return <BrAlphabet key={`component-${index}`} />;
        } else if (item.type === "two-section") {
          return <Faq key={`component-${index}`} />;
        } else if (item.type === "review-list") {
          return <Review key={`component-${index}`} />;
        } else if (item.type === "slides") {
          return <Slides key={`component-${index}`} />;
        } else if (item.type === "faq-section") {
          console.log("Custommmmmmmmmmmmmmm Codeeeeeeeee");
          return <Faq key={`component-${index}`} />;
        } else {
          return (
            <div key={`component-${index}`}>{renderComponent(item, index)}</div>
          );
        }
      })}
    </div>
  );
};

export default Preview;
