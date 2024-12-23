import { Editor } from "grapesjs";
import { createRoot } from "react-dom/client";
import TabSection from "./tabs";

const GsTabs = (editor: Editor) => {
  editor.Components.addType("tab", {
    view: {
      onRender({ el }) {
        const root = createRoot(el);
        root.render(<TabSection />);
      },
    },
  });
  editor.BlockManager.add("tab", {
    label: "Tab Section",
    category: "React-component",
    content: {
      type: "tab",
    },
  });
};

export default GsTabs;
