// User.js

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      required: false,
      default: "user",
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    character: {
      pokedollar: {
        type: Number,
        required: false,
        default: 500,
      },
      baseTexture: {
        type: String,
        required: true,
        default: "hero_01_red_m_walk",
      },
      walkingAnimationMapping: {
        type: Number,
        required: false,
        default: 0,
      },
      currentTexture: {
        type: String,
        required: false,
        default: "hero_01_red_m_walk",
      },
      isOnline: {
        type: Boolean,
        required: false,
        default: false,
      },
      chatColor: {
        type: String,
        required: true,
        default: "#ffffff",
      },
    },
    onMap: {
      map_id: {
        type: String,
        required: false,
        default: "SnowTown",
      },
      position: {
        x: {
          type: Number,
          default: 25,
          required: false,
        },
        y: {
          type: Number,
          default: 22,
          required: false,
        },
        ld: {
          type: String,
          default: "down",
          required: false,
        },
        speed: {
          type: Number,
          default: 3,
          required: false,
        },
      },
      previousPosition: {
        x: {
          type: Number,
          default: 25,
          required: false,
        },
        y: {
          type: Number,
          default: 22,
          required: false,
        },
        ld: {
          type: String,
          default: "down",
          required: false,
        },
        speed: {
          type: Number,
          default: 3,
          required: false,
        },
      },
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Fonction de hachage du mot de passe avant l'enregistrement dans la base de données
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// Fonction pour la génération d'un jeton d'authentification
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const User = mongoose.model("User", userSchema);
const setAllUsersOffline = async () => {
  try {
    await User.updateMany(
      { "character.isOnline": true },
      { "character.isOnline": false }
    );
    // // update position all users to default
    // await User.updateMany(
    //   { "onMap.map_id": { $ne: "SnowTown" } },
    //   { "onMap.map_id": "SnowTown" }
    // );
    // await User.updateMany(
    //   { "onMap.position.x": { $ne: 25 } },
    //   { "onMap.position.x": 25 }
    // );
    // await User.updateMany(
    //   { "onMap.position.y": { $ne: 22 } },
    //   { "onMap.position.y": 22 }
    // );
    // await User.updateMany(
    //   { "onMap.position.ld": { $ne: "down" } },
    //   { "onMap.position.ld": "down" }
    // );
    // await User.updateMany(
    //   { "onMap.position.speed": { $ne: 3 } },
    //   { "onMap.position.speed": 3 }
    // );
    // await User.updateMany(
    //   { "onMap.previousPosition.x": { $ne: 25 } },
    //   { "onMap.previousPosition.x": 25 }
    // );
    // await User.updateMany(
    //   { "onMap.previousPosition.y": { $ne: 22 } },
    //   { "onMap.previousPosition.y": 22 }
    // );
    // await User.updateMany(
    //   { "onMap.previousPosition.ld": { $ne: "down" } },
    //   { "onMap.previousPosition.ld": "down" }
    // );
    // await User.updateMany(
    //   { "onMap.previousPosition.speed": { $ne: 3 } },
    //   { "onMap.previousPosition.speed": 3 }
    // );

    console.log("All users set to offline.");
  } catch (error) {
    console.error(error.message);
  }
};

setAllUsersOffline();
export default User;
