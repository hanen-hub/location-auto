// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={{
      backgroundColor: "#f0f0f0",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <span>🔐 Connecté en tant que : <strong>{userEmail}</strong></span>
      <button onClick={handleLogout} style={{
        padding: "8px 16px",
        backgroundColor: "#d40000",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        Déconnexion
      </button>
    </div>
  );
}

export default Navbar;
