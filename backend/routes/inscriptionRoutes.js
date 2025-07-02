const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// 📌 Route POST /api/inscription
router.post("/", async (req, res) => {
  try {
    const {
      nom,
      prenom,
      cin,
      email,
      password,
      telephone,
      permis,
      numeroPermis,
      dateNaissance,
      numeroCarte,
      nomCarte,
      role,
    } = req.body;

    // ✅ Vérification des champs obligatoires
    if (!nom || !prenom || !email || !password || !cin) {
      return res
        .status(400)
        .json({ message: "Tous les champs requis ne sont pas remplis." });
    }

    // 🔍 Vérifie si un utilisateur existe déjà (email ou CIN)
    const utilisateurExistant = await User.findOne({
      $or: [{ email }, { cin }],
    });
    if (utilisateurExistant) {
      return res
        .status(400)
        .json({ message: "Cet email ou CIN est déjà utilisé." });
    }

    // 🔐 Hachage du mot de passe
    const motDePasseHache = await bcrypt.hash(password, 10);

    // 🆕 Création de l'utilisateur
    const nouvelUtilisateur = new User({
      nom,
      prenom,
      cin,
      email,
      password: motDePasseHache,
      telephone,
      permis,
      numeroPermis,
      dateNaissance,
      numeroCarte,
      nomCarte,
      role: role || "client",
    });

    // 💾 Enregistrement dans MongoDB
    await nouvelUtilisateur.save();

    // ✅ Réponse de succès
    res.status(201).json({ message: "Inscription réussie ✅" });
  } catch (error) {
    console.error("❌ Erreur d'inscription :", error.message);
    res
      .status(500)
      .json({
        message: "Erreur serveur lors de l'inscription",
        error: error.message,
      });
  }
});

module.exports = router;
