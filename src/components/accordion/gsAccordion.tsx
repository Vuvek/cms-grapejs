import { Editor } from "grapesjs";
import { createRoot } from "react-dom/client";
import Accordion from "./accordion";

const GsAccordion = (editor: Editor) => {
  editor.Components.addType("accordion", {
    view: {
      onRender({ el }) {
        const root = createRoot(el);
        root.render(<Accordion />);
      },
    },
  });

  editor.BlockManager.add("accordion", {
    label: "Accordion",
    category: "React-component",
    content: {
      type: "accordion",
    },
  });
};

export default GsAccordion;
