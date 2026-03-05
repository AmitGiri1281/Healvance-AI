// src/components/sections/HeroSection.jsx
import { motion, useMotionValue, useSpring, useTransform, useScroll, useVelocity, useAnimationFrame } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Sparkles, Zap, Shield, Cpu, Globe, Star } from "lucide-react";
import { useRef, useMemo, useState, useEffect } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

  // Advanced mouse tracking with smooth spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const mouseYSpring = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Parallax transforms
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Glow position based on mouse
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["20%", "80%"]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Advanced particle system
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      duration: 15 + Math.random() * 30,
      delay: Math.random() * 5,
      color: i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-purple-400',
      opacity: 0.1 + Math.random() * 0.3
    }));
  }, []);

  // Floating orbs data
  const orbs = useMemo(() => {
    return [...Array(5)].map((_, i) => ({
      id: i,
      size: 200 + Math.random() * 300,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: i % 3 === 0 ? 'from-blue-500/20' : i % 3 === 1 ? 'from-cyan-500/20' : 'from-purple-500/20',
      duration: 15 + Math.random() * 20
    }));
  }, []);

  // Animated grid lines
  const gridItems = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      delay: i * 0.1
    }));
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
    >
      {/* Dynamic Background Gradients */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_50%)]"
        style={{
          backgroundPosition: `${mousePosition.x * 0.02}px ${mousePosition.y * 0.02}px`
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_50%)]"
        style={{
          backgroundPosition: `${mousePosition.x * -0.02}px ${mousePosition.y * -0.02}px`
        }}
      />

      {/* Animated Grid with Perspective */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Moving Grid Lines */}
        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{
              top: `${item.id * 5}%`,
              left: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      {/* Advanced Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particle.color} blur-[1px]`}
            style={{
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              scale: [1, 1.5, 1],
              opacity: [particle.opacity, particle.opacity * 2, particle.opacity]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Orbs with Mouse Parallax */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} to-transparent blur-[100px]`}
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            x: useTransform(mouseXSpring, [-0.5, 0.5], [-50, 50]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [-50, 50]),
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            scale: {
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      ))}

      {/* Central Interactive Orb */}
      <motion.div
        style={!isTouch ? { rotateX, rotateY } : {}}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Pulse Rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0 rounded-full border border-blue-500/30"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 4,
              delay: ring * 0.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge with Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md group hover:border-blue-500/50 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </motion.div>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              Next-Gen AI Solutions
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-blue-400"
            />
          </motion.div>

          {/* Main Title with Advanced Text Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="relative inline-block">
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 blur-3xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <span className="relative bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Healvance AI
                </span>
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ backgroundSize: '200% auto' }}
              >
                Smart Healthcare & Digital Solutions
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated Subtitle with Type Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl text-gray-300 mb-4">
              Transforming healthcare and business with
            </p>
            <div className="relative inline-block">
              <TypeAnimation
                sequence={[
                  "AI Medical Assistants", 2000,
                  "Modern Web Platforms", 2000,
                  "Automation & Cloud Systems", 2000,
                  "Scalable Digital Products", 2000,
                  "Machine Learning Models", 2000,
                  "Real-time Analytics", 2000
                ]}
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
              />
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          {/* CTA Buttons with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >
            <Link
              to="/contact"
              className="group relative px-10 py-5 rounded-full text-lg font-semibold overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500" />
              <span className="relative flex items-center justify-center gap-2 text-white">
                Schedule Consultation
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </span>
            </Link>

            <Link
              to="/portfolio"
              className="group px-10 py-5 rounded-full text-lg font-semibold border border-white/20 text-white flex items-center justify-center gap-2 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1
                }}
              />
              <span>View Our Work</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust Indicators with Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Zap className="w-4 h-4 text-blue-400" />
                <span>AI-Powered</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Secure</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Scalable</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Global</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Trusted</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 rounded-full border border-white/20 flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}