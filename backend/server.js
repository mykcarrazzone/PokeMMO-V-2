// Created by: Lorenzo GIRALT
// Created at : 2023-02-17
// Updated at : 2023-02-17

import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import apiRoutes from "./routes/api.js";
import authRoutes from "./routes/auth.js";
import authMiddleware from "./middleware/authMiddleware.js";
import connectDB from "./config/db.js";
import playersSocket from "./sockets/players.js";
import socket from "socket.io";
// Configuration des variables d'environnement
dotenv.config();

// Configuration du serveur Express.js
const app = express();
const server = http.createServer(app);
const io = socket(server);
const port = 3000;
const ip = "0.0.0.0"; // FIX ALL POSSIBLE IP ADDRESSES RELATED ISSUES

connectDB(); // utilisation du fichier pour la connexion à la base de données

io.on("connection", (socket) => {
  socket.on("gameReady", () => {
    console.log("SOCKET BACKEND CONNECTED: ", socket.id);
    playersSocket(io, socket);
    socket.emit("gameReadyToClient");
  });
});

// Configuration de Socket.io

// Middleware
app.use(
  cors({
    origin: "http://127.0.0.1:4070",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(morgan("dev"));

// Ajout du middleware pour les routes /auth
const authRouter = express.Router();

authRouter.use(authMiddleware);
authRouter.use(authRoutes);

// Routes d'authentification
app.use("/auth", authRouter);

// Routes d'API
app.use("/api", apiRoutes);

// Démarrage du serveur
server.listen(port, ip, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
