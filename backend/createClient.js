const mongoose = require("mongoose");
const User = require("./models/User"); // Vérifie que le chemin est correct
const bcrypt = require("bcryptjs");

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/location_auto", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createClient() {
  try {
    // Vérifier si l'utilisateur existe déjà
    const existingClient = await User.findOne({ email: "client@demo.tn" });
    if (existingClient) {
      console.log("⚠️ Ce client existe déjà dans la base de données.");
      mongoose.disconnect();
      return;
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash("test1234", 10);

    // Créer le client
    const client = new User({
      nom: "Client",
      prenom: "Demo",
      cin: "12312312",
      email: "client@demo.tn",
      password: hashedPassword, // ⛳ Doit correspondre au champ défini dans ton modèle
      phone: "20777777",
      typePermis: "B",
      numeroPermis: "CLT1234",
      dateNaissance: new Date("1993-04-12"),
      numeroCarte: "5555444466668888",
      nomCarte: "Client Demo",
      role: "client",
    });

    // Sauvegarder dans MongoDB
    await client.save();
    console.log("✅ Client créé avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors de la création du client :", error.message);
  } finally {
    mongoose.disconnect();
  }
}

createClient();
