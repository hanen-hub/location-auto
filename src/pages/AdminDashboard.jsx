import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.clear(); // Supprime les données
    navigate("/login");   // Redirige vers la page de connexion
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <h1>Bienvenue, Administrateur</h1>
      <p>Email connecté : <strong>{email}</strong></p>

      <div className="dashboard-actions">
        <button>👤 Gérer les utilisateurs</button>
        <button>📅 Voir les réservations</button>
        <button>🚗 Ajouter un véhicule</button>
        <button onClick={handleLogout}>🚪 Déconnexion</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
