// Import des modules
import express from "express";
import userController from "../controllers/userController.js";
import messagesController from "../controllers/messagesController.js";

// Configuration du routeur
const router = express.Router();

// Récupération de la liste des Pokémon
router.post("/friends/invite", userController.sendFriendInvitation);
router.post("/sendMessage", messagesController.sendNewMessage);
router.get("/getUserById", userController.getUserById);

// Export du routeur
export default router;
