// Import des modules
import express from "express";
import pokemonController from "../controllers/pokemonController.js";
import userController from "../controllers/userController.js";
import messagesController from "../controllers/messagesController.js";
// Configuration du routeur
const router = express.Router();

// Récupération de la liste des Pokémon
router.get("/getGeneralMessages", messagesController.getGeneralMessages);
router.post("/createGeneralMessage", messagesController.createGeneralMessage);
router.get("/getPokemonList", pokemonController.getPokemonList);
router.get("/getAllUsers", userController.getAllUsers);
router.post("/createUser", userController.createUser);
router.post("/login", userController.authenticateUser);

// Export du routeur
export default router;
