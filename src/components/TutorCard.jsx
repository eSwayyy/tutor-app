import "../styles/tutorcard.css";

export default function TutorCard({ tutor, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{tutor.name}</h3>
      <p>{tutor.subject}</p>
      <span>⭐ {tutor.rating}</span>
      <p className="price">💰 ${tutor.price}</p>
    </div>
  );
}