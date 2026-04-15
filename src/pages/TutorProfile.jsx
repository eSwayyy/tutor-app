import "../styles/profile.css";

export default function TutorProfile({ tutor, setPage }) {
  if (!tutor) return <div>No tutor seleccionado</div>;

  return (
    <div className="profile">
      <h2>{tutor.name}</h2>
      <p>{tutor.subject}</p>
      <p>⭐ {tutor.rating}</p>
      <p className="price">💰 ${tutor.price} / hora</p>

      <button onClick={() => setPage("request")}>
        Solicitar clase
      </button>

      <button onClick={() => setPage("home")}>Volver</button>
    </div>
  );
}