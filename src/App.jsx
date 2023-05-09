import MarkDownInput from "./components/MarkDownInput/MarkDownInput";
import SavedNote from "./components/SavedNote/SavedNote";
import NoteDisplay from "./components/NoteDisplay/NoteDisplay";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [note, setNote] = useState(0)


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }


  return (
    <>
      <main>
        <div className="left--section">
          <SavedNote/>
        </div>
        <div className="right--section">
          <NoteDisplay content={content} title={title} />
          <MarkDownInput content={content} title={title} onTitleChange={handleTitleChange} onContentChange={handleContentChange} />
        </div>
      </main>
    </>
  );
}
