// Import des modèles
import User from "../models/user.js";
import Friend from "../models/friends.js";
import bcrypt from "bcrypt";
import { decodeJWT } from "../utils/jwtDecode.js";
const User2 = require("../models/user.js");
const sendFriendInvitation = async (req, res) => {
  try {
    const { friendId } = req.body;
    const userId = req.user._id;

    const existingFriend = await Friend.findOne({ userId, friendId });
    if (existingFriend) {
      return res
        .status(400)
        .json({ message: "Friend invitation already exists" });
    }

    const newFriend = new Friend({
      userId,
      friendId,
      invitationStatus: "pending",
    });
    await newFriend.save();

    res.status(201).json({ message: "Friend invitation sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Fonction pour la création d'un nouvel utilisateur
const createUser = async (req, res) => {
  const { username, email, password, character } = req.body;

  try {
    // Vérification si l'utilisateur existe déjà dans la base de données
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Cet email est déjà utilisé par un autre utilisateur.",
      });
    }

    // Création d'un nouvel utilisateur
    const user = new User({ username, email, password, character });
    await user.save();

    // Génération d'un jeton d'authentification
    const token = await user.generateAuthToken();

    // Envoi de la réponse avec le jeton d'authentification
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ message: errors });
    } else {
      res.status(500).json({
        message: "Une erreur est survenue lors de l'inscription.",
      });
    }
  }
};

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérification si l'utilisateur existe dans la base de données
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect." });
    }

    // Vérification du mot de passe
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect." });
    }

    // Génération du jeton d'authentification
    const token = await user.generateAuthToken();

    // Envoi de la réponse avec le jeton d'authentification
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Une erreur est survenue lors de la connexion." });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

const getUserById = async (req, res) => {
  const userId = decodeJWT(req.headers.authorization.split(" ")[1]);
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

export default {
  createUser,
  getAllUsers,
  authenticateUser,
  sendFriendInvitation,
  getUserById,
  User2,
};
