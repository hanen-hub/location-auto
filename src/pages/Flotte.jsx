import React, { useState } from "react";
import FiltersFlotte from "../components/FiltersFlotte";
import VehicleGrid from "../components/VehicleGrid";
import { vehicleData } from "../data/vehicleData";
import './Flotte.css';

function Flotte() {
  const [selectedType, setSelectedType] = useState("Tous");

  const filteredVehicles =
    selectedType === "Tous"
      ? vehicleData
      : vehicleData.filter((v) => v.type === selectedType);

  return (
    <div className="flotte-container">
      {/* Barre promo est déjà dans ton layout global, ici vient directement après */}
      <FiltersFlotte
        selectedType={selectedType}
        onFilterChange={setSelectedType}
      />
      <VehicleGrid vehicles={filteredVehicles} />
    </div>
  );
}

export default Flotte;
