import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewNote = ({ notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const getId = (value) => {
    const randNum = `${value}` + Math.floor(Math.random() * 1000);
    return Number.parseInt(randNum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempNotes = [...notes];
    const datetime = Date.now();
    const id = getId(datetime);
    const color = colors[Math.floor(Math.random() * colors.length)];

    const newNote = { id, title, body, datetime, archived: false, color };
    tempNotes.push(newNote);
    setNotes(tempNotes);
    navigate("/");
  };

  return (
    <div className="newNote">
      <h1>New note</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="noteTitle">Note title</label>
        <input
          required
          type="text"
          id="noteTitle"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="noteBody">Note body</label>
        <textarea
          required
          id="noteBody"
          placeholder="Note body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <input type="submit" role="submit" className="btn" />
      </form>
    </div>
  );
};

export default NewNote;
