import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faIdCard,
  faPhone,
  faLock,
  faCar,
  faEnvelope,
  faBirthdayCake,
  faEye,
  faEyeSlash,
  faUserShield,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Inscription.css";

function Inscription() {
  const [formData, setFormData] = useState({
    role: "client",
    nom: "",
    prenom: "",
    cin: "",
    email: "",
    password: "",
    phone: "",
    typePermis: "",
    numeroPermis: "",
    dateNaissance: "",
    numeroCarte: "",
    nomCarte: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prev) => ({ ...prev, phone }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const champsVides = Object.values(formData).some((val) => val === "");
    if (champsVides) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/inscription", formData); 
      setMessage("✅ Inscription réussie !");

      setTimeout(() => {
        navigate("/login"); // Redirection vers la page de connexion
      }, 2000);
    } catch (error) {
      setMessage(
        "❌ Erreur : " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="inscription-container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit} className="form">

        {/* Rôle */}
        <div className="input-group">
          <FontAwesomeIcon icon={faUserShield} className="input-icon" />
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="client">Client</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>

        {/* Nom & Prénom */}
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
        </div>

        <div className="input-group">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
        </div>

        {/* CIN */}
        <div className="input-group">
          <FontAwesomeIcon icon={faIdCard} />
          <input type="text" name="cin" placeholder="CIN" value={formData.cin} onChange={handleChange} />
        </div>

        {/* Email */}
        <div className="input-group">
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>

        {/* Mot de passe */}
        <div className="input-group password-group">
          <FontAwesomeIcon icon={faLock} />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        {/* Téléphone */}
        <div className="input-group">
          <FontAwesomeIcon icon={faPhone} />
          <PhoneInput
            country={"tn"}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputStyle={{ width: "100%" }}
          />
        </div>

        {/* Type de permis */}
        <div className="input-group">
          <FontAwesomeIcon icon={faCar} />
          <select name="typePermis" value={formData.typePermis} onChange={handleChange}>
            <option value="">Type de permis</option>
            <option value="A">A - Moto</option>
            <option value="B">B - Voiture</option>
            <option value="C">C - Camion</option>
            <option value="D">D - Bus</option>
          </select>
        </div>

        {/* Numéro permis */}
        <div className="input-group">
          <FontAwesomeIcon icon={faIdCard} />
          <input
            type="text"
            name="numeroPermis"
            placeholder="Numéro de permis"
            value={formData.numeroPermis}
            onChange={handleChange}
          />
        </div>

        {/* Date de naissance */}
        <div className="input-group">
          <FontAwesomeIcon icon={faBirthdayCake} />
          <input
            type="date"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
          />
        </div>

        {/* Coordonnées de facturation */}
        <div className="facturation-section">
          <h3>Coordonnées de facturation</h3>
          <p className="info-facturation">Aucun paiement ne sera débité au moment de l’adhésion.</p>
          <div className="cartes-images">
            <img src="/images/visa.png" alt="Visa" />
            <img src="/images/mastercard.png" alt="MasterCard" />
            <img src="/images/paypal.png" alt="PayPal" />
            <img src="/images/e-dinar.jpg" alt="e-Dinar" />
          </div>
        </div>

        {/* Numéro carte */}
        <div className="input-group">
          <FontAwesomeIcon icon={faCreditCard} />
          <input
            type="text"
            name="numeroCarte"
            placeholder="Numéro de carte"
            value={formData.numeroCarte}
            onChange={handleChange}
          />
        </div>

        {/* Nom sur la carte */}
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            name="nomCarte"
            placeholder="Nom sur la carte"
            value={formData.nomCarte}
            onChange={handleChange}
          />
        </div>

        <button type="submit">S'inscrire</button>
      </form>

      {message && <p className="message">{message}</p>}
      ⬅ Retour à la connexion

    </div>
  );
}

export default Inscription;
