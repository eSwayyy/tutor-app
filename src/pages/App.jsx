import { useState } from "react";
import Home from "./pages/Home";
import TutorProfile from "./pages/TutorProfile";
import RequestPage from "./pages/RequestPage";
import Landing from "./pages/Landing";
import "./styles/app.css";

export default function App() {
  const [page, setPage] = useState("landing");
  const [selectedTutor, setSelectedTutor] = useState(null);

  return (
    <div className="app">
      {page === "landing" && <Landing setPage={setPage} />}

      {page === "home" && (
        <Home setPage={setPage} setSelectedTutor={setSelectedTutor} />
      )}

      {page === "profile" && (
        <TutorProfile tutor={selectedTutor} setPage={setPage} />
      )}

      {page === "request" && (
        <RequestPage tutor={selectedTutor} setPage={setPage} />
      )}
    </div>
  );
}