// backend/createAdmin.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User"); // Assure-toi que le chemin est correct

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/location_auto", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Fonction pour créer un admin
async function createAdmin() {
  try {
    // Vérifie si l'admin existe déjà
    const existingAdmin = await User.findOne({ email: "admin@location.tn" });
    if (existingAdmin) {
      console.log("⚠️ Un administrateur avec cet email existe déjà.");
      mongoose.disconnect();
      return;
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash("admin1234", 10);

    // Création de l'admin
    const admin = new User({
      nom: "Admin",
      prenom: "Démo",
      cin: "11111111",
      email: "admin@location.tn",
      password: hashedPassword,
      phone: "20000000",
      typePermis: "B",
      numeroPermis: "ADM0001",
      dateNaissance: new Date("1990-01-01"),
      role: "admin",
    });

    await admin.save();
    console.log("✅ Administrateur créé avec succès !");
  } catch (err) {
    console.error("❌ Erreur lors de la création :", err.message);
  } finally {
    mongoose.disconnect();
  }
}

createAdmin();
