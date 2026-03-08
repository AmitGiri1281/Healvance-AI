// src/components/layout/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, Zap, Globe, Code, Mail } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const navLinks = [
  { 
    name: "Home", 
    path: "/",
    icon: "🏠"
  },
  {
    name: "Services",
    path: "/services",
    icon: "⚡",
    dropdown: [
      { name: "AI & Machine Learning", path: "/services", description: "Intelligent automation solutions", icon: <Zap size={16} /> },
      { name: "Web Development", path: "/services", description: "Modern web applications", icon: <Globe size={16} /> },
      { name: "Cloud & APIs", path: "/services", description: "Scalable cloud infrastructure", icon: <Code size={16} /> },
    ],
  },
  { 
    name: "Portfolio", 
    path: "/portfolio",
    icon: "✨"
  },
  { 
    name: "Blog", 
    path: "/blog",
    icon: "📝"
  },
  { 
    name: "Contact", 
    path: "/contact",
    icon: "📬"
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownTimeout = useRef(null);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Handle scroll effects with hide/show on scroll down
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    setIsScrolled(latest > 50);
    
    // Hide navbar on scroll down, show on scroll up
    if (latest > previous && latest > 200) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    lastScrollY.current = latest;
  });

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/services") return location.pathname.startsWith("/services");
    return location.pathname === path;
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle dropdown with delay for better UX
  const handleDropdownEnter = (name) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <AnimatedLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.dropdown ? (
                  // Dropdown trigger
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className={`
                      group relative px-4 py-2 rounded-xl text-sm font-medium
                      flex items-center gap-1.5 transition-all duration-200
                      ${isActive(item.path)
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                      }
                    `}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                    <motion.span
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} className="text-gray-400" />
                    </motion.span>

                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ) : (
                  // Regular link
                  <Link
                    to={item.path}
                    className={`
                      group relative px-4 py-2 rounded-xl text-sm font-medium
                      flex items-center gap-1.5 transition-all duration-200
                      ${isActive(item.path)
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                      }
                    `}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>

                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                      className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      {/* Dropdown Header */}
                      <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Sparkles size={16} className="text-blue-500" />
                          {item.name}
                        </h3>
                      </div>

                      {/* Dropdown Items */}
                      <div className="p-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 group"
                          >
                            <div className="mt-0.5 text-blue-500 group-hover:scale-110 transition-transform">
                              {sub.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                {sub.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {sub.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link
                to="/contact"
                className="group relative px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1
                  }}
                />
                
                {/* Button content */}
                <span className="relative flex items-center gap-2">
                  <Mail size={16} />
                  Get Started
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} className="text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100"
            style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
          >
            <div className="px-6 py-8">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      // Mobile dropdown
                      <div className="space-y-2">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium text-gray-900">{item.name}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          >
                            <ChevronDown size={18} className="text-gray-400" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-11 pr-4 space-y-2"
                            >
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-blue-600 transition-all duration-200"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="text-blue-500">{sub.icon}</div>
                                    <div>
                                      <div className="font-medium">{sub.name}</div>
                                      <div className="text-xs text-gray-500 mt-0.5">
                                        {sub.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Mobile regular link
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive(item.path)
                            ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.name}</span>
                        {isActive(item.path) && (
                          <motion.div
                            layoutId="activeMobileIndicator"
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"
                          />
                        )}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="block text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Mail size={18} />
                    Get Started Today
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}