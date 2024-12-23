import { Editor } from "grapesjs";
import { createRoot } from "react-dom/client";
import ConstantSlides from "./constantSlides";

const GsConstantScrollSlide = (editor: Editor) => {
  editor.Components.addType("constant-slides", {
    view: {
      onRender({ el }) {
        const root = createRoot(el);
        root.render(<ConstantSlides />);
      },
    },
  });
  editor.BlockManager.add("constant-slides", {
    label: "Constant Slides",
    category: "React-component",
    content: {
      type: "constant-slides",
    },
  });
};

export default GsConstantScrollSlide;
