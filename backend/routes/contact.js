import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, phone, subject, urgency, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill required fields." });
  }

  try {
    const newContact = new Contact({ name, email, phone, subject, urgency, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error ❌", error: err.message });
  }
});

export default router;
// C:\Users\Lenovo\OneDrive\Desktop\Healvance-AI\backend\routes\contact.js