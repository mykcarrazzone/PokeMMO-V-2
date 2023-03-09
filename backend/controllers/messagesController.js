import Message from "../models/Message.js";
import GeneralMessage from "../models/GeneralMessage.js";

const createGeneralMessage = async (req, res) => {
  try {
    const { sender, message } = req.body;
    const newMessage = new GeneralMessage({ sender, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getGeneralMessages = async (req, res) => {
  try {
    const messages = await GeneralMessage.find().sort({ createdAt: "desc" });

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Récupérer tous les messages d'un utilisateur spécifique
const getMessages = async (req, res) => {
  try {
    const { from, to } = req.query;

    const messages = await Message.find({
      $or: [
        { from: from, to: to },
        { from: to, to: from },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const sendNewMessage = async (req, res) => {
  try {
    const { to, text } = req.body;
    const from = req.user._id;

    const message = new Message({ from, to, text });
    await message.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default {
  getMessages,
  sendNewMessage,
  createGeneralMessage,
  getGeneralMessages,
};
