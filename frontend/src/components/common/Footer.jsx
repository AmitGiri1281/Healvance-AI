// src/components/common/Footer.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  MessageSquare,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black text-gray-400 relative">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-4">
            Healvance <span className="text-blue-500">AI</span>
          </h2>
          <p className="max-w-md leading-relaxed">
            AI-powered healthcare & business solutions built for speed,
            security, and real-world impact.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/AmitGiri1281" target="_blank">
              <Github className="hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/amitgiri8/" target="_blank">
              <Linkedin className="hover:text-white transition" />
            </a>
            <a href="#" target="_blank">
              <Twitter className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {[
              "AI Solutions",
              "Web Development",
              "Cloud & APIs",
              "UI/UX Design",
            ].map((item) => (
              <li key={item}>
                <Link to="/services" className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> New Delhi, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+919935344361" className="hover:text-white">
                +91 9935344361
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:healvanceai@gmail.com"
                className="hover:text-white"
              >
                healvanceai@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© {new Date().getFullYear()} Healvance AI. All rights reserved.</p>

        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-white">
            Terms
          </Link>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white"
          >
            <ArrowUp size={14} /> Top
          </button>
        </div>
      </div>

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full 
                   bg-blue-600 text-white flex items-center justify-center 
                   shadow-lg"
        aria-label="Live Chat"
      >
        <MessageSquare />
      </motion.button>
    </footer>
  );
}
