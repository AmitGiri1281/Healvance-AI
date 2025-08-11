// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Animated gradient background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(74, 108, 247, 0.8) 0%, transparent 40%)',
            'radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.8) 0%, transparent 40%)',
            'radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.8) 0%, transparent 40%)',
            'radial-gradient(circle at 20% 30%, rgba(74, 108, 247, 0.8) 0%, transparent 40%)',
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      
      {/* Floating abstract shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [-50, 50, -50],
          y: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main content */}
          <div className="max-w-4xl">
            <motion.span
              className="text-accent font-semibold tracking-wide uppercase text-sm md:text-base"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Next Generation Digital Solutions
            </motion.span>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mt-6 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                Transform
              </span>{' '}
              Your Business
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-200 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  "AI-driven automation",
                  1500,
                  "Cloud-native architecture",
                  1500,
                  "Real-time analytics",
                  1500,
                  "Scalable microservices",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="relative overflow-hidden group bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10">Get Started</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -100 }}
                  whileHover={{ x: 0, opacity: 1 }}
                />
              </Link>
              <Link
                to="/portfolio"
                className="relative overflow-hidden group bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:bg-white/10"
              >
                <span className="relative z-10">View Case Studies</span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Animated tech stack indicators */}
          <motion.div 
            className="mt-20 grid grid-cols-3 md:grid-cols-6 gap-8 opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1 }}
          >
            {['', '', '', '', '', ''].map((tech, i) => (
              <motion.div
                key={tech}
                className="text-white/80 text-sm font-medium tracking-wide"
                whileHover={{ scale: 1.1, color: 'rgba(255, 255, 255, 1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}