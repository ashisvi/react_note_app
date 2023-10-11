import { useState } from "react";
import { Link } from "react-router-dom";
import Note from "../components/Note";
import { FiPlus, FiGrid } from "react-icons/fi";
import { FaList } from "react-icons/fa6";

const Home = ({ notes, setNotes }) => {
  const [listView, setListView] = useState(false);

  const handleDelete = (id) => {
    const tempNotes = notes.filter((note) => note.id !== id);
    setNotes(tempNotes);
  };

  notes.reverse();

  const reverseArray = function (arr) {
    const tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      tempArr.push(notes[i]);
    }
    return tempArr;
  };

  return (
    <div className="home">
      <div className="home_header">
        <h1>Notes</h1>
        <div onClick={() => setListView(!listView)}>
          {listView ? (
            <FiGrid title="Grid View" />
          ) : (
            <FaList title="List View" />
          )}
        </div>
      </div>
      <div
        className={`notes ${
          listView ? "listView" : "gridView"
        } custom-scrollbar`}
      >
        {reverseArray(notes).map((note) => (
          <Note
            key={note.id}
            note={note}
            setNotes={setNotes}
            listView={listView}
            handleDelete={handleDelete}
          />
        ))}
        <Link className="addNote td-none" to="/newnote">
          <FiPlus />
        </Link>
      </div>
    </div>
  );
};

export default Home;
