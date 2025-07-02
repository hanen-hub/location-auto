// src/components/VehicleCard.jsx

import React from "react";
import "./VehicleCard.css";

export default function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <img src={vehicle.image} alt={vehicle.name} className="vehicle-img" />
      <div className="vehicle-info">
        <h3 className="vehicle-name">{vehicle.name}</h3>
        <p className="vehicle-desc">{vehicle.description}</p>
        <br/>
        <p className="vehicle-price">{vehicle.price} TND / jour</p> 

      </div>
    </div>
  );
}
