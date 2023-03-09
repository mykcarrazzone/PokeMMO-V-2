import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  friendId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  invitationStatus: {
    type: String,
    enum: ["pending", "accepted", "declined"],
    default: "pending",
  },
});

const Friend = mongoose.model("Friend", friendSchema);

export default Friend;
