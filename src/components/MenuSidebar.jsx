import React from "react";
import "./MenuSidebar.css";

function MenuSidebar({ onClose }) {
  return (
    <div className="Menu-Sidebar" onMouseLeave={onClose}>
      <ul>
        <li>🚗 Flotte</li>
        <li>💸 Bons plans</li>
        <li>🎁 Fidélité</li>
        <li>🧾 Libre-service</li>
        <li>🛒 Produits</li>
        <li>👨‍💼 Business</li>
        <li>🌍 Destination</li>
      </ul>
    </div>
  );
}

export default MenuSidebar;

