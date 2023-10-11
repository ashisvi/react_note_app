import { format } from "date-fns";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

const Note = ({ note, listView, handleDelete }) => {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <Link to={`/note/${note.id}`} className="td-none">
        <h3>{note.title}</h3>
      </Link>

      {listView || (
        <div className="note_body">
          <Markdown>
            {note.body.length < 500 ? note.body : note.body.slice(1, 100)}
          </Markdown>
        </div>
      )}
      <div className="note_footer">
        <p>{format(new Date(note.datetime), "do, MMM yyyy hh:mm a")}</p>
        <FaTrash onClick={() => handleDelete(note.id)} />
      </div>
    </div>
  );
};

export default Note;
