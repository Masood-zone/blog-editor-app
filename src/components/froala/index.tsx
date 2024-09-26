import { useState } from "react";
import parse from "html-react-parser";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js";
import "./froala.css";
import UploadPost from "./uploadButton";
import { mapping } from "./data";

export default function Editor({
  content,
  setContent,
}: {
  content: string;
  setContent: (content: string) => void;
}) {
  const [showEditor, setShowEditor] = useState(true);

  const handleModelChange = (model: string) => {
    setContent(model);
  };

  const handleSubmit = () => {
    setShowEditor(!showEditor);
  };
  const options = {
    replace: (domNode: any) => {
      if (domNode.type === "tag" && domNode.name in mapping) {
        domNode.attribs.className =
          mapping[domNode.name as keyof typeof mapping];
      }
    },
    trim: true,
  };

  return (
    <section className="">
      <h1 className="text-3xl font-semibold text-center mb-1">Editor</h1>
      {showEditor ? (
        <>
          <div className="editor">
            <FroalaEditorComponent
              tag="textarea"
              model={content}
              onModelChange={handleModelChange}
            />
            <UploadPost content={content} onSubmit={handleSubmit} />
          </div>
        </>
      ) : (
        <div className="container xl:w-1/2 lg:w-3/4 w-full px-5 py-16 mx-auto border">
          <div className="">{parse(content, options)}</div>
          <button className="btn" onClick={() => setShowEditor(true)}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
