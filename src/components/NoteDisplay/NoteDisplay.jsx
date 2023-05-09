import "./NoteDisplay.scss";
import Showdown from "showdown";
export default function NoteDisplay({ title, content }) {
  const converter = new Showdown.Converter();
  const convertedTitle = converter.makeHtml(title);
  const convertedContent = converter.makeHtml(content);
  const formatHTML = (converted) => {
    return { __html: converted };
  };

  return (
    <div className="NoteDisplay__wrapper">
      <div dangerouslySetInnerHTML={formatHTML(convertedTitle)}></div>
      <div dangerouslySetInnerHTML={formatHTML(convertedContent)}></div>
    </div>
  );
}
