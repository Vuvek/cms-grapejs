"use client";
import grapesjs, { Editor } from "grapesjs";
import gsPluginForms from "grapesjs-plugin-forms";
import gsWebpage from "grapesjs-preset-webpage";
import gsBlocks from "grapesjs-blocks-basic";
import gsFlexBlock from "grapesjs-blocks-flexbox";
import gsCustome from "grapesjs-custom-code";
import React, { useEffect, useRef } from "react";
import "grapesjs/dist/css/grapes.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { serversideDataProps } from "@/app/page";
import GsListing from "@/components/listing/gsListing";
import AddSaveDataPanel from "./panel/saveData";
import GsSlider from "@/components/customImageSlider/gsSlider";
import GsFeaturedCategory from "@/components/featuredCategory/gsFeaturedCategory";
import GsLogosSlider from "@/components/scrollableLogos/gsSlider";
import { usePathname } from "next/navigation";
import { styleManagerConfig } from "./styleManagerConfig";
import GsBrAlphabet from "@/components/brAlphabet/gsBrAlphabet";
import gsLogoListing from "@/components/logoLisitng/gsLogoListing";
import GsReview from "@/components/review/gsReview";
import GsSlides from "@/components/slides/gsSlides";
import GsFaq from "@/components/faq/gsFaq";
import GsConstantScrollSlide from "@/components/constatntSlidesScroll/gsConstantSlides";
import GsHorizantalScrollSlide from "@/components/horizontalSlideScroll/gsHorizantal";
import GsConstantHorizantalScrollSlide from "@/components/constantHorizantalScroll/gsConstantHorizantalScroll";
import GsDotSlideScroll from "@/components/dotsSlideScroll/gsDotSlideScroll";
import GsTabs from "@/components/tabs/gsTabs";
import GsSimpleSlider from "@/components/simpleSlider/gsSimpleSlider";

import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import GsAccordion from "@/components/accordion/gsAccordion";

interface grapejsEditorProps {
  serverSideData?: serversideDataProps[];
  projectID?: string;
}
const GrapeJsEditor: React.FC<grapejsEditorProps> = ({ serverSideData }) => {
  const params = usePathname();
  const pageId = params.split("").slice(1).join("") || "grapesjs";

  const editorRef = useRef<Editor | null>(null);

  // const loadEndpoint = "api/loadData";
  // const saveEndpoint = "api/saveData";

  const loadEndpoint = `/api/loadGrapesData?id=${pageId}`;
  const saveEndpoint = "/api/saveGrapesData";

  // const projectID = "demoSite";
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

    editorRef.current = grapesjs.init({
      height: "100vh",
      container: "#gjs",
      width: "auto",
      fromElement: true,
      plugins: [gsCustome, gsBlocks, gsPluginForms, gsWebpage, gsFlexBlock],
      pluginsOpts: {
        "grapesjs-blocks-basic": {
          flexGrid: true,
        },
      },
      selectorManager: { componentFirst: true },
      styleManager: {
        sectors : [...styleManagerConfig.sectors,

          {
            name: "AOS (Animation On Scroll)",
            open: false,
            buildProps: [
              "aos-animation",
              "aos-duration",
              "aos-delay",
              "aos-offset",
              "aos-easing",
            ],
            properties: [
              {
                name: "Animation",
                property: "aos-animation",
                type: "select",
                defaults: "fade",
                options: [
                  { id: "fade", label: "Fade", value: "fade" },
                  { id: "fade-up", label: "Fade Up", value: "fade-up" },
                  { id: "fade-down", label: "Fade Down", value: "fade-down" },
                  { id: "fade-left", label: "Fade Left", value: "fade-left" },
                  { id: "fade-right", label: "Fade Right", value: "fade-right" },
                  { id: "flip-left", label: "Flip Left", value: "flip-left" },
                  { id: "flip-right", label: "Flip Right", value: "flip-right" },
                  { id: "zoom-in", label: "Zoom In", value: "zoom-in" },
                  { id: "zoom-in-up", label: "Zoom In Up", value: "zoom-in-up" },
                  { id: "zoom-in-down", label: "Zoom In Down", value: "zoom-in-down" },
                  { id: "zoom-out", label: "Zoom Out", value: "zoom-out" },
                  { id: "zoom-out-up", label: "Zoom Out Up", value: "zoom-out-up" },
                ],
                onChange: (value: any) => {
                  console.log(value,'akldjflkasdjfklsadjflkasdjflkasd')
                  const selected = editorRef.current?.getSelected();
                  if (selected) {
                    selected.addAttributes({ "data-aos": value?.value });
                  }
                },
              },
              {
                name: "Duration (ms)",
                property: "aos-duration",
                type: "integer",
                defaults: "400",
                step: 50,
              },
              {
                name: "Delay (ms)",
                property: "aos-delay",
                type: "integer",
                defaults: "0",
                step: 50,
              },
              {
                name: "Offset (px)",
                property: "aos-offset",
                type: "integer",
                defaults: "120",
                step: 10,
              },
              {
                name: "Easing",
                property: "aos-easing",
                type: "select",
                defaults: "ease",
                options: [
                  { id: "ease", label: "Ease", value: "ease" },
                  { id: "ease-in", label: "Ease In", value: "ease-in" },
                  { id: "ease-out", label: "Ease Out", value: "ease-out" },
                  { id: "ease-in-out", label: "Ease In Out", value: "ease-in-out" },
                  { id: "linear", label: "Linear", value: "linear" },
                ],
              },
            ],
          }
        ],
      },
      storageManager: {
        type: "remote",
        autoload: true,
        options: {
          remote: {
            // Json
            // urlLoad: loadEndpoint,
            // urlStore: saveEndpoint,
            // onStore: (data) => {
            //   console.log("datadatadatadata", data);
            //   return { id: projectID, data };
            // },
            // onLoad: (result) => {
            //   console.log("data", result.data);
            //   return result.data.data || {};
            // },

            // For DB
            contentTypeJson: true,
            urlLoad: loadEndpoint,
            urlStore: saveEndpoint,
            onStore: (data) => {
              return { id: pageId, data };
            },
            onLoad: (result) => {
              return result.data.data || {};
            },
          },
        },
        autosave: true,
        stepsBeforeSave: 1,
      },
      canvas: {
        styles: [
          "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
          "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
          "https://unpkg.com/flickity@2.2.2/dist/flickity.min.cssflickity/dist/flickity.min.css",
          "/styles/main.css",
        ],
      },
    });

    // Add icon in panel
    AddSaveDataPanel(editorRef.current);

    // Add custom component
    GsListing(editorRef.current, serverSideData || []);
    GsSlider(editorRef.current, pageId);
    GsFeaturedCategory(editorRef.current, serverSideData || []);
    GsLogosSlider(editorRef.current, pageId);
    GsBrAlphabet(editorRef.current);
    gsLogoListing(editorRef.current);
    GsReview(editorRef.current);
    GsFaq(editorRef.current);

    GsSlides(editorRef.current);
    GsConstantScrollSlide(editorRef.current);
    GsHorizantalScrollSlide(editorRef.current);
    GsConstantHorizantalScrollSlide(editorRef.current);
    GsDotSlideScroll(editorRef.current);
    GsTabs(editorRef.current);
    GsSimpleSlider(editorRef.current);
    GsAccordion(editorRef.current);

    // Reinitialize AOS after components are added
    editorRef.current.on("component:add", () => {
      AOS.refresh();
    });

    editorRef.current.on("component:update", () => {
      AOS.refresh();
    });

    // Trigger AOS refresh after any change
    AOS.refresh();
  }, [serverSideData]);

  return (
    <div>
      <div id="gjs"></div>
    </div>
  );
};

export default GrapeJsEditor;
