"use client";

import { FroalaOptions } from "froala-editor";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_editor.css";
import "./plugins/instype-char-counter.js";
import { postBridgeMessage } from "./postBridgeMessage";

export default function Editor() {
  const config: Partial<FroalaOptions> = {
    editorClass: "rounded-xs overflow-hidden",
    toolbarButtons: {},
    pluginsEnabled: ["instypeCharCounter"],
    events: {
      "instype.charCounter.update": (count: number) => {
        postBridgeMessage("onCharCountChange", count);
      },
    },
  };

  return <FroalaEditorComponent config={config} />;
}
