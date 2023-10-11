import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const note = notes.find((note) => note.id.toString() === id);
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedNotes = notes.map((note) =>
      note.id.toString() === id
        ? { ...note, title: editTitle, body: editBody }
        : note
    );

    setNotes(updatedNotes);
    navigate("/");
  };

  useEffect(() => {
    if (note) {
      setEditTitle(note.title);
      setEditBody(note.body);
    }
  }, [note, setEditTitle, setEditBody]);

  return (
    <div className="newNote">
      <h1>Edit note</h1>
      <form onSubmit={handleEdit}>
        <label htmlFor="noteTitle">Note title</label>
        <input
          required
          type="text"
          id="noteTitle"
          placeholder="Note title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="noteBody">Note body</label>
        <textarea
          required
          id="noteBody"
          placeholder="Note body"
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        ></textarea>
        <input type="submit" role="submit" className="btn" />
      </form>
    </div>
  );
};

export default EditNote;
