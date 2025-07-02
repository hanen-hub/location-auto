// src/components/VehicleGrid.jsx

import React from "react";
import VehicleCard from "./VehicleCard";

export default function VehicleGrid({ vehicles }) {
  if (!vehicles || vehicles.length === 0) {
    return <p className="text-center text-gray-600">Aucun véhicule disponible.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {vehicles.map((v) => (
        <VehicleCard key={v.id} vehicle={v} />
      ))}
    </div>
  );
}
