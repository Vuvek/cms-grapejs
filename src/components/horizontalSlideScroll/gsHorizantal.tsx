import { Editor } from "grapesjs";
import { createRoot } from "react-dom/client";
import HorizontalSliderWithScroll from "./horizantalSlide";

const GsHorizantalScrollSlide = (editor: Editor) => {
  editor.Components.addType("horizontal-slides", {
    view: {
      onRender({ el }) {
        const root = createRoot(el);
        root.render(<HorizontalSliderWithScroll />);
      },
    },
  });
  editor.BlockManager.add("horizontal-slides", {
    label: "Horizantal Slides",
    category: "React-component",
    content: {
      type: "horizontal-slides",
    },
  });
};

export default GsHorizantalScrollSlide;
