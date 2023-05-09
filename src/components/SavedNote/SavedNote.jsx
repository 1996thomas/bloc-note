import "./SavedNote.scss";
import Button from "../Button/Button";
import Note from "./Note";

export default function SavedNote() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  return (
    <>
      <div className="SavedNote__wrapper">
        <Button value="Ajouter une note" />
        {notes.map((note, i) => (
          <Note key={i} title={note.title} content={note.content} />
        ))}
      </div>
    </>
  );
}
