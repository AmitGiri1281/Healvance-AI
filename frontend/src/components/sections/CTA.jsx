// src/components/sections/CTA.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA({
  title = "Ready to get started?",
  subtitle = "Contact us today and let’s build something amazing together.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
}) {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-90"></div>

      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{title}</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-100">{subtitle}</p>

          <Link
            to={buttonLink}
            className="inline-block bg-white text-primary font-semibold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
