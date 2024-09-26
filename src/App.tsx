import { useState } from "react";
import Editor from "./components/froala";

function App() {
  const [content, setContent] = useState<string>("");

  return (
    <main>
      <Editor content={content} setContent={setContent} />
    </main>
  );
}

export default App;
