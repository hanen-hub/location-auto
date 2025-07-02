const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: { type: String, unique: true },
  cin: { type: String, unique: true },
  password: String,
  dateNaissance: Date,
  numeroCarte: String,
  nomCarte: String,
  role: { type: String, enum: ["client", "admin"], default: "client" },
});

module.exports = mongoose.model("User", userSchema);
