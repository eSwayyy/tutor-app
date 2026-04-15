import { useState } from "react";
import SearchBar from "../components/SearchBar";
import TutorCard from "../components/TutorCard";
import "../styles/home.css";

const mockTutors = [
  { id: 1, name: "Juan Pérez", subject: "Calculo 1", rating: 4.5, price: 5000 },
  { id: 2, name: "María Soto", subject: "Programacion", rating: 5, price: 6000 },
  { id: 3, name: "Carlos Rojas", subject: "Algebra", rating: 4.2, price: 4500 },
  { id: 4, name: "Fernanda Díaz", subject: "Fisica", rating: 4.8, price: 7000 },
  { id: 5, name: "Diego Morales", subject: "Quimica", rating: 4.0, price: 4000 },
  { id: 6, name: "Valentina Torres", subject: "Calculo 2", rating: 5, price: 8000 },
  { id: 7, name: "Sebastián Vega", subject: "Programacion", rating: 4.6, price: 5500 },
  { id: 8, name: "Camila Fuentes", subject: "Estadistica", rating: 4.7, price: 6500 },
];

export default function Home({ setPage, setSelectedTutor }) {
  const [query, setQuery] = useState("");

  const filtered = mockTutors.filter((t) =>
    t.subject.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Buscar Tutor</h1>
      <SearchBar setQuery={setQuery} />
      <div className="tutor-list">
        {filtered.map((tutor) => (
          <TutorCard
            key={tutor.id}
            tutor={tutor}
            onClick={() => {
              setSelectedTutor(tutor);
              setPage("profile");
            }}
          />
        ))}
      </div>
    </div>
  );
}