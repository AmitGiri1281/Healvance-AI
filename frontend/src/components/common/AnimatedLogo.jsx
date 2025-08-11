// src/components/common/AnimatedLogo.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AnimatedLogo() {
  return (
    <Link to="/" className="flex items-center">
      <motion.img
        src="/logo.png"
        alt="Healvance AI Logo"
        className="h-12 w-12 rounded-full object-cover border-2 border-primary shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      />
      <motion.span
        className="ml-3 text-xl font-bold text-primary-dark"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ color: "#2563eb" }}
      >
        Healvance AI
      </motion.span>
    </Link>
  );
}
