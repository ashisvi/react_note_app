import { useEffect, useState } from "react";
import { Routes, Route, json } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import NotePage from "./pages/NotePage";
import NewNote from "./pages/NewNote";
import EditNote from "./pages/EditNote";
import Missing from "./pages/Missing";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("myNotes")) || []
  );

  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Sidebar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/note/:id"
            element={<NotePage notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/newnote"
            element={<NewNote notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/edit/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
          <Route path="*" Component={Missing} />
        </Routes>
      </main>
    </>
  );
}

export default App;
