const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// 📌 Connexion à MongoDB avec URI depuis .env ou fallback local
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/location_auto";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connexion à MongoDB réussie");
  })
  .catch((err) => {
    console.error("❌ Erreur MongoDB :", err);
  });
