// Import de Mongoose
import mongoose from "mongoose";

// Schéma pour les Pokémon
const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true, default: 1 },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// Modèle pour les Pokémon
const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export { Pokemon };
