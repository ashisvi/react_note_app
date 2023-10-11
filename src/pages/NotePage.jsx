import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import { FaEdit, FaArchive } from "react-icons/fa";

const NotePage = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id == id);

  const handleArchive = () => {
    const updatedNotes = notes.map((note) =>
      note.id.toString() === id ? { ...note, archived: !note.archived } : note
    );

    setNotes(updatedNotes);
  };

  return (
    <div className="notePage">
      <h2 className="notePage_heading">
        <span>{note.title}</span>
        <div>
          <FaArchive onClick={handleArchive} />
          <Link to={`/edit/${note.id}`} className="td-none">
            <FaEdit />
          </Link>
        </div>
      </h2>
      <div className="notePage_body">
        <Markdown>{note.body}</Markdown>
      </div>
    </div>
  );
};

export default NotePage;
