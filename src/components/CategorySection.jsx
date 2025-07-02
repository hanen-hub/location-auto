// src/components/CategorySection.jsx
import React from "react";
import VehicleCard from "./VehicleCard";

export default function CategorySection({ title, vehicles }) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {vehicles.map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
}
