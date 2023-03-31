// Import des modules
import { Pokemon } from "../models/pokemon.js";

// Contrôleur pour la récupération de la liste des Pokémon
const getPokemonList = async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    res.send(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

export default {
  getPokemonList,
};
