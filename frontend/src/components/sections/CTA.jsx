// src/components/sections/CTA.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA({ title, buttonText }) {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <Link 
            to="/contact"
            className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}