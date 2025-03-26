"use client";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("./_component/editor/Editor.client"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="p-4">
      <main>
        <Editor />
      </main>
    </div>
  );
}
