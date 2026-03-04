// src/components/common/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "AI Solutions", path: "/services/ai-ml" },
      { name: "Web Development", path: "/services/web" },
      { name: "Cloud & APIs", path: "/services/cloud" },
    ],
  },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <AnimatedLogo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setDropdown(item.name)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 text-sm font-medium transition ${
                  isActive(item.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
                {item.dropdown && <ChevronDown size={14} />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.dropdown && dropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-3 w-56 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-semibold text-white rounded-full
                       bg-blue-600 hover:bg-blue-700 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-gray-700 font-medium hover:text-blue-600"
                  >
                    {item.name}
                  </Link>

                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center mt-6 px-6 py-3 bg-blue-600
                           text-white rounded-full font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
