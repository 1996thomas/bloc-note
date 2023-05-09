import Button from "../Button/Button";
import "./MarkDownInput.scss";

export default function MarkDownInput({onTitleChange,onContentChange,title,content,}) {
  const saveItems = (e) => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({title : title, content : content})
    localStorage.setItem('notes',JSON.stringify(notes))
  };



  return (
    <>
      <div className="MarkDownInput__wrapper">
        <input
          type="text"
          placeholder="Titre ..."
          onChange={onTitleChange}
          value={title}
        />
        <textarea
          placeholder="Content ..."
          onChange={onContentChange}
          value={content}
        ></textarea>
        <Button value="Sauvegarder" functionToDo={saveItems} />
      </div>
    </>
  );
}
