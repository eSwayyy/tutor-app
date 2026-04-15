import { useState } from "react";
import "../styles/landing.css";

export default function Landing({ setPage }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Validación simple: correo institucional (.edu o similar)
    if (!email.includes("@") || (!email.endsWith(".edu") && !email.includes(".cl"))) {
      setError("Debes usar un correo institucional válido");
      return;
    }

    setError("");
    setPage("home");
  };

  return (
    <div className="landing">
      <div className="landing-box">
        <h1>UniTutor</h1>
        <p>Conecta con estudiantes que te pueden ayudar a aprobar</p>

        <input
          type="email"
          placeholder="Correo institucional"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <span className="error">{error}</span>}

        <button onClick={handleRegister}>
          Registrarse
        </button>
      </div>
    </div>
  );
}
