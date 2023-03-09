// middleware/authMiddleware.js

import jwt from "jsonwebtoken";
import User from "../models/user.js";

const authMiddleware = async (req, res, next) => {
  try {
    console.log("eoueou")
    // Ajout des en-têtes CORS à toutes les routes
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "Utilisateur non trouvé." });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Jeton d'authentification invalide." });
  }
};

export default authMiddleware;
