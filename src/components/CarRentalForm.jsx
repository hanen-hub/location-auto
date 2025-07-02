import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./CarRentalForm.css";

function CarRentalForm() {
  const [depart, setDepart] = useState("");
  const [autreAgence, setAutreAgence] = useState(false);
  const [dateDepart, setDateDepart] = useState("2025-06-27T10:00");
  const [dateRetour, setDateRetour] = useState("2025-06-29T10:00");
  const [type, setType] = useState("Loisir");
  const [plus25ans, setPlus25ans] = useState(true);
  const [codeReduction, setCodeReduction] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis avec :", {
      depart,
      autreAgence,
      dateDepart,
      dateRetour,
      type,
      plus25ans,
      codeReduction,
    });
  };

  return (
    <form className="rental-form" onSubmit={handleSubmit}>
     <label>Agence de départ</label>
     <div className="input-with-icon">
  <FontAwesomeIcon icon={faSearch} className="input-icon" />
  <input
    type="text"
    value={depart}
    onChange={(e) => setDepart(e.target.value)}
    placeholder="Entrez une ville ou un aéroport"
    required
  />
  </div>



      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={autreAgence}
            onChange={(e) => setAutreAgence(e.target.checked)}
          />
          Retour dans une autre agence
        </label>
      </div>

      <div className="date-row">
        <div className="date-group">
          <label>Date de départ</label>
          <input
            type="datetime-local"
            value={dateDepart}
            onChange={(e) => setDateDepart(e.target.value)}
          />
        </div>

        <div className="icon-center">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        </div>

        <div className="date-group">
          <label>Date de retour</label>
          <input
            type="datetime-local"
            value={dateRetour}
            onChange={(e) => setDateRetour(e.target.value)}
          />
        </div>
      </div>

      <label>Type de location</label>
<div className="radio-inline-group">
  <label>
    <input
      type="radio"
      name="type"
      value="Loisir"
      checked={type === "Loisir"}
      onChange={(e) => setType(e.target.value)}
    />
    Loisir
  </label>
  <label>
    <input
      type="radio"
      name="type"
      value="Travail"
      checked={type === "Travail"}
      onChange={(e) => setType(e.target.value)}
    />
    Travail
  </label>
  <label>
    <input
      type="radio"
      name="type"
      value="Autre"
      checked={type === "Autre"}
      onChange={(e) => setType(e.target.value)}
    />
    Autre
  </label>
</div>


      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={plus25ans}
            onChange={(e) => setPlus25ans(e.target.checked)}
          />
          Conducteur âgé de plus de 25 ans
        </label>
      </div>

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={codeReduction}
            onChange={(e) => setCodeReduction(e.target.checked)}
          />
          J’ai un code de réduction
        </label>
      </div>

      <button type="submit" className="submit-btn">
        <FontAwesomeIcon icon={faSearch} /> Rechercher un véhicule
      </button>
    </form>
  );
}

export default CarRentalForm;
