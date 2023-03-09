import mongoose from "mongoose";
const generalMessageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

if (mongoose.models.GeneralMessage) {
  delete mongoose.models.GeneralMessage;
}

const GeneralMessage = mongoose.model("GeneralMessage", generalMessageSchema);

export default GeneralMessage;
