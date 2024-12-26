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

import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import Accordion from "../accordion/accordion";

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
        <>
          {/* <div
            style={{
              position: "relative",
              paddingTop: "42.25%", // Maintain 16:9 aspect ratio
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
          </div> */}

          <div
            style={{
              position: "relative",
              paddingTop: "42.25%", // Maintain 16:9 aspect ratio
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
            <div className="flex justify-center items-center w-full absolute undefined inset-0 p-1 lg:p-4 text-white">
              <div
                className="max-w-6xl w-full"
                style={{ background: "rgb(, 1)", padding: "20px" }}
              >
                <div
                  className="normal-case text-[25px] sm:text-[38px] lg:text-[72px] font-family-1 leading-[28px] sm:leading-[47px] lg:leading-[80px] tracking-[1px] font-semibold text-center aos-init aos-animate"
                  data-aos="zoom-in-up"
                  style={{
                    color: "#ffffff",
                    textShadow: "2px 0px 6px  rgba(51, 51, 51, 0.3)",
                  }}
                >
                  <h1>Corporate and Promotional Custom Branded Apparel</h1>
                </div>
                <div
                  className="normal-case text-[13px] sm:text-[17px] lg:text-[20px] font-family-1 leading-[14px] sm:leading-[20px] lg:leading-[28px] tracking-[1.4px] font-normal text-center pt-[10px] sm:pt-[10px] lg:pt-[10px] aos-init aos-animate"
                  data-aos="zoom-in"
                  style={{
                    color: "#ffffff",
                    textShadow: "2px 0px 6px  rgba(51, 51, 51, 0.3)",
                  }}
                >
                  Enjoy Expert Branding. Customize Premium Apparel and Logo
                  Merchandise.
                </div>
                <div
                  className="pt-0 lg:pt-5 text-center"
                  title="Discover Our Brands"
                >
                  <a
                    data-aos="zoom-in"
                    title="Corporate Gear Offers Exclusive Access to Customize Your Logo on Premium Brands."
                    target="_self"
                    className="text-center uppercase text-[13px] sm:text-[17px] lg:text-[20px] leading-[14px] sm:leading-[19px] lg:leading-[24px] font-semibold inline-block custbtn-primary pl-[8px] sm:pl-[15px] lg:pl-[43px] pr-[8px] sm:pr-[15px] lg:pr-[43px] pt-[7px] sm:pt-[10px] lg:pt-[19px] pb-[7px] sm:pb-[10px] lg:pb-[19px] aos-init aos-animate bg-[#000000] rounded-[50px] px-[43px] py-[20px]"
                    rel=""
                    href="https://www.corporategear.com/brands.html"
                  >
                    <span>Discover Our Brands</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/934584474?h=e77d1fa27a&amp;badge=0&amp;background=1&quality=1080p&autoplay=1&loop=1&autopause=0&amp?muted=1;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title="Website Background Montage_4 h265 2K"
            ></iframe>
          </div> */}
        </>
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
  } else if (type === "Slider-logos") {
    return <SrollableLogos />;
  } else if (type == "dynamic-products") {
    return (
      <FeaturedCategory
        key={`component-${index}`}
        serverSideData={component?.attributes?.serverSideData}
      />
    );
  } else if (type == "accordion") {
    return <Accordion key={`component-${index}`} />;
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
    setTimeout(function () {
      AOS.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        // offset: 120, // offset (in px) from the original trigger point
        // delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger
      });
      AOS.refresh();
    }, 100);

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
