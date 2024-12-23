import { Editor } from "grapesjs";
import { createRoot } from "react-dom/client";
import DotSlideScroll from "./dotSlideScroll";

const GsDotSlideScroll = (editor: Editor) => {
  editor.Components.addType("dots-slides", {
    view: {
      onRender({ el }) {
        const root = createRoot(el);
        root.render(<DotSlideScroll />);
      },
    },
  });
  editor.BlockManager.add("dots-slides", {
    label: "Dots Slides",
    category: "React-component",
    content: {
      type: "dots-slides",
    },
  });
};

export default GsDotSlideScroll;
