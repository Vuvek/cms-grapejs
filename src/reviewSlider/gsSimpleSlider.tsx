import { Editor } from "grapesjs";
import { createRoot } from "react-dom/client";
import SimpleSlider from "./simpleSlider";

const GsSimpleSlider = (editor: Editor) => {
  editor.Components.addType("review-slider", {
    view: {
      onRender({ el }) {
        const root = createRoot(el);
        root.render(<SimpleSlider />);
      },
    },
  });
  editor.BlockManager.add("review-slider", {
    label: "Review Slider",
    category: "React-component",
    content: {
      type: "review-slider",
    },
  });
};

export default GsSimpleSlider;
