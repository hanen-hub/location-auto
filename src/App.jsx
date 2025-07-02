import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import CarRentalForm from "./components/CarRentalForm";
import LoginPage from "./pages/LoginPage";
import Inscription from "./pages/Inscription";
import MenuSidebar from "./components/MenuSidebar";
import Flotte from "./pages/Flotte";
import BonsPlans from "./pages/BonsPlans";
import Fidelite from "./pages/Fidelite";
import LibreService from "./pages/LibreService";
import Produits from "./pages/Produits";
import Business from "./pages/Business";
import Destination from "./pages/Destination";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import Unauthorized from "./pages/Unauthorized";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleLogin = () => setShowLogin((prev) => !prev);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <Router>
      <header className="header">
        <div className="logo">LocationAuto</div>

        <div className="nav-links">
          <button className="menu-link" onClick={toggleLogin}>
            <FontAwesomeIcon icon={faUser} /> Se connecter
          </button>

          <div className="menu-wrapper">
            <button className="menu-link" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} /> Menu
            </button>

            {showMenu && (
              <div className="Menu-Sidebar">
                <ul>
                  <li><Link to="/flotte">🚗 Flotte</Link></li>
                  <br />
                  <li><Link to="/bons-plans">💸 Bons plans</Link></li>
                  <br />
                  <li><Link to="/fidelite">🎁 Fidélité</Link></li>
                  <br />
                  <li><Link to="/libre-service">🧾 Libre-service</Link></li>
                  <br />
                  <li><Link to="/produits">🛒 Produits</Link></li>
                  <br />
                  <li><Link to="/business">👨‍💼 Business</Link></li>
                  <br />
                  <li><Link to="/destination">🌍 Destination</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="promo">
        🚗 Offre Spéciale Été : <strong>-25% sur toutes les locations en Tunisie</strong> jusqu’au <strong>30 juillet</strong> !
        <br />
        <strong>Réservez dès maintenant et profitez des meilleurs tarifs !</strong>
      </div>

      {/* Fenêtre modale de connexion */}
      {showLogin && (
        <div className="login-overlay" onClick={toggleLogin}>
          <div className="login-popup" onClick={(e) => e.stopPropagation()}>
            <LoginPage />
            <button className="close-btn" onClick={toggleLogin}>X</button>
          </div>
        </div>
      )}

      {/* Routes de l'application */}
      <Routes>
        <Route
          path="/"
          element={
            <main className="container">
              <h1 className="title">
                Bienvenue sur LocationAuto – votre agence de location de voitures en Tunisie
              </h1>
              <br />
              <p className="custom-paragraph">
                Notre plateforme est une agence de location de voitures moderne et fiable...
              </p>
              <CarRentalForm />
            </main>
          }
        />

        <Route path="/inscription" element={<Inscription />} />
        <Route path="/menusidebar" element={<MenuSidebar />} />
        <Route path="/flotte" element={<Flotte />} />
        <Route path="/bons-plans" element={<BonsPlans />} />
        <Route path="/fidelite" element={<Fidelite />} />
        <Route path="/libre-service" element={<LibreService />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/business" element={<Business />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />


        {/* ✅ Routes protégées avec bon nom de chemin */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/client-dashboard"
          element={
            <PrivateRoute role="client">
              <ClientDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
