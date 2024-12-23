import { Editor } from "grapesjs";
import { createRoot } from "react-dom/client";
import SimpleSlider from "./simpleSlider";

const GsSimpleSlider = (editor: Editor) => {
  editor.Components.addType("simple-slider", {
    view: {
      onRender({ el }) {
        const root = createRoot(el);
        root.render(<SimpleSlider />);
      },
    },
  });
  editor.BlockManager.add("simple-slider", {
    label: "Simple Slider",
    category: "React-component",
    content: {
      type: "simple-slider",
    },
  });
};

export default GsSimpleSlider;
