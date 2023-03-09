// sockets/messages.js

import Message from "../models/Message.js";

const messagesSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`Socket connecté : ${socket.id}`);

    // Écoute de l'événement pour l'envoi de messages
    socket.on("send-message", async (data) => {
      try {
        const message = new Message({
          from: data.from,
          to: data.to,
          text: data.text,
        });
        await message.save();
        io.to(socket.id).emit("message-sent", message);
        io.to(data.to).emit("message-received", message);
      } catch (error) {
        console.log(error);
      }
    });

    // Déconnexion d'un utilisateur
    socket.on("disconnect", () => {
      console.log(`Socket déconnecté : ${socket.id}`);
    });
  });
};

export default messagesSocket;
