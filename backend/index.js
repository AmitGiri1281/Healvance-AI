import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import "./models/Contact.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Healvance AI Backend is running 🚀");
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log("MongoDB connected ✅");
})
.catch((err) => {
  console.error("MongoDB connection error ❌", err);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});