import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.css";

function LoginPage() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  // 🔐 Connexion utilisateur
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {

        email: email,
        password: password
      });

      const { role, message, token } = res.data;
      console.log("Rôle reçu:", role); // 🔍 Affiche le rôle dans la console


      if (!role) {
        throw new Error("Rôle utilisateur introuvable.");
      }

      // Stockage dans localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userRole", role);
      if (token) localStorage.setItem("token", token);

      setMessage(message || "✅ Connexion réussie !");
      setIsSuccess(true);

      // Redirection en fonction du rôle
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "client") {
        navigate("/client-dashboard");
      } else {
        throw new Error("Rôle non reconnu.");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || "❌ Erreur de connexion.";
      setMessage(errorMsg);
      setIsSuccess(false);
    }
  };

  // 🔁 Mot de passe oublié (simulation)
  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!resetEmail.trim()) {
      setMessage("❌ Veuillez entrer une adresse email valide.");
      setIsSuccess(false);
      return;
    }

    setMessage(`📧 Un lien a été envoyé à ${resetEmail} (simulation)`);
    setIsSuccess(true);
  };

  return (
    <div className="login-form">
      <h2>{mode === "login" ? "Connexion" : "Mot de passe oublié"}</h2>

      {mode === "login" ? (
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <p className={isSuccess ? "success-message" : "error-message"}>
              {message}
            </p>
          )}

          <button type="submit">Se connecter</button>

          <div className="login-options">
            <button
              type="button"
              className="link-button"
              onClick={() => setMode("forgot")}
            >
              Mot de passe oublié ?
            </button>
            <span> | </span>
            <Link to="/inscription">Créer un compte</Link>
          </div>
        </form>
      ) : (
        <form onSubmit={handleForgotPassword}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              placeholder="Votre email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
          </div>

          {message && (
            <p className={isSuccess ? "success-message" : "error-message"}>
              {message}
            </p>
          )}

          <button type="submit">Envoyer le lien</button>

          <div className="login-options">
            <button
              type="button"
              className="link-button"
              onClick={() => setMode("login")}
            >
              ⬅ Retour à la connexion
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
