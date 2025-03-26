"use client";
import { FroalaOptions } from "froala-editor";
import "froala-editor/css/froala_editor.css";
import FroalaEditorComponent from "react-froala-wysiwyg";

export default function FroalaEditor() {
  const config: Partial<FroalaOptions> = {
    editorClass: "rounded-xs overflow-hidden",
    toolbarButtons: {},
  };
  return <FroalaEditorComponent config={config} />;
}
