// 📦 Importation des modules nécessaires
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// 🔧 Initialisation de l'application Express
const app = express();

// 🔐 Chargement des variables d'environnement
dotenv.config();

// 🛡️ Middleware
app.use(cors());
app.use(express.json());

// 🔌 Connexion MongoDB
require("./db");

// 📂 Importation des routes
const inscriptionRoutes = require("./routes/inscriptionRoutes");
const authRoutes = require("./routes/auth");

// 📌 Enregistrement des routes
app.use("/api/inscription", inscriptionRoutes); // ex: POST /api/inscription
app.use("/api/auth", authRoutes); // ex: POST /api/auth/login

// 🚀 Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur backend lancé sur http://localhost:${PORT}`);
});
