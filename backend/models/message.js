// models/Message.js

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  to: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
if (mongoose.models.Message) {
  delete mongoose.models.Message;
}
const Message = mongoose.model("Message", messageSchema);

export default Message;
