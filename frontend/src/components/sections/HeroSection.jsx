// src/components/sections/HeroSection.jsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { useRef, useMemo } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);

  // Detect touch devices (disable mouse tilt)
  const isTouch =
    typeof window !== "undefined" && "ontouchstart" in window;

  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["15deg", "-15deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-15deg", "15deg"]
  );

  const handleMouseMove = (e) => {
    if (isTouch || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Memoized particles (better performance)
  const particles = useMemo(
    () =>
      [...Array(12)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 20 + Math.random() * 20,
      })),
    []
  );

  return (
    <section
      ref={containerRef}
      aria-label="Hero section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-[1px] h-[1px] bg-blue-400/30 rounded-full"
            initial={{ x: `${p.x}vw`, y: `${p.y}vh` }}
            animate={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <motion.div
        style={!isTouch ? { rotateX, rotateY } : {}}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-[100px]"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
        transition={{ scale: { duration: 8, repeat: Infinity }, rotate: { duration: 30, repeat: Infinity, ease: "linear" } }}
      />

      <motion.div
        style={!isTouch ? { rotateX, rotateY } : {}}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 blur-[80px]"
        animate={{ scale: [1, 1.2, 1], rotate: [360, 0] }}
        transition={{ scale: { duration: 10, repeat: Infinity }, rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto text-center md:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise-Grade Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Digital
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>

          {/* Animated subtitle */}
          <div className="mb-12">
            <p className="text-2xl text-gray-300 mb-4">
              Accelerating innovation through
            </p>
            <TypeAnimation
              aria-label="Key services we provide"
              sequence={[
                "AI-Powered Automation",
                2000,
                "Cloud-Native Architecture",
                2000,
                "Data-Driven Insights",
                2000,
                "Scalable Infrastructure",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition"
            >
              Schedule Consultation
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/5 transition"
            >
              Explore Success Stories
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
