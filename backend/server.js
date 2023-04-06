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
import pokeMMO from "./sockets/pokeMMO.js";
import socket from "socket.io";
// Configuration many env variables
dotenv.config();

// Configuration of Express server
const app = express();
const server = http.createServer(app);
const io = socket(server);
const port = 4129;
const ip = "0.0.0.0"; // FIX ALL POSSIBLE IP ADDRESSES RELATED ISSUES

connectDB(); // USE MONGODB ATLAS

io.on("connection", (socket) => {
  socket.on("gameReady", () => {
    console.log("Player connected: ", socket.id);

    pokeMMO(io, socket); // SOCKET PLAYER AND AROUND ANYTHING RELATED TO PLAYER

    socket.emit("gameReadyToClient");
    // ALLOW TO SEND A MESSAGE TO ALL CONNECTED CLIENTS FOR LAUNCHING THE GAME
  });
});

// Middleware
app.use(
  cors({
    origin: [
      "http://127.0.0.1:4060",
      "http://localhost:4060",
      "http://192.168.1.18:4060",
      "http://109.208.107.116:4060",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(morgan("dev"));

// Add middleware to check if user is authenticated
const authRouter = express.Router();

authRouter.use(authMiddleware);
authRouter.use(authRoutes);

// Routes authentification (protected)
app.use("/auth", authRouter);

// Routes API (public)
app.use("/api", apiRoutes);

// Server start
server.listen(port, ip, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
