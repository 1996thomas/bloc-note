export default function Note(props) {
  return (
    <>
      <div className="Note__wrapper">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </>
  );
}
