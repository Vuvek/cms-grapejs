import { Editor } from "grapesjs";
import { createRoot } from "react-dom/client";
import ConstantSlides from "./constantHorizantalScroll";

const GsConstantHorizantalScrollSlide = (editor: Editor) => {
  editor.Components.addType("constant-horizantal-slides", {
    view: {
      onRender({ el }) {
        const root = createRoot(el);
        root.render(<ConstantSlides />);
      },
    },
  });
  editor.BlockManager.add("constant-horizantal-slides", {
    label: "Constant Horizantal Slides",
    category: "React-component",
    content: {
      type: "constant-horizantal-slides",
    },
  });
};

export default GsConstantHorizantalScrollSlide;
