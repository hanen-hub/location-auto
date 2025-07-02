import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function ClientDashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <h1>Bienvenue dans votre espace client</h1>
      <p>Client connecté : <strong>{email}</strong></p>

      <div className="dashboard-actions">
        <button>📆 Mes réservations</button>
        <button>✏️ Modifier mon profil</button>
        <button>💳 Méthodes de paiement</button>
        <button onClick={handleLogout}>🚪 Déconnexion</button>
      </div>
    </div>
  );
}

export default ClientDashboard;
