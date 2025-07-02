import React from "react";
import "./FiltersFlotte.css";

const types = ["Tous", "Voitures de Luxe", "Voitures de tourisme", "Voitures économique", "Voitures Familiale"];

export default function FiltersFlotte({ selectedType, onFilterChange }) {
  return (
    <div className="filters-bar">
      {types.map((type) => (
        <button
          key={type}
          className={`filter-btn ${selectedType === type ? "active" : ""}`}
          onClick={() => onFilterChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
