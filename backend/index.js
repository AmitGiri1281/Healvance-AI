import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/contact", contactRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected ✅"))
.catch((err) => console.log("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
