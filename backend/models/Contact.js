import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { type: String, default: "General" },
  urgency: { type: String, default: "Low" },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Contact", contactSchema);
//C:\Users\Lenovo\OneDrive\Desktop\Healvance-AI\backend\models\Contact.js