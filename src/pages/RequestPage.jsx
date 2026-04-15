import "../styles/request.css";

export default function RequestPage({ tutor, setPage }) {
  return (
    <div className="request">
      <h2>Solicitar clase con {tutor?.name}</h2>

      <input type="date" />
      <input type="time" />

      <button>Confirmar</button>
      <button onClick={() => setPage("home")}>Cancelar</button>
    </div>
  );
}