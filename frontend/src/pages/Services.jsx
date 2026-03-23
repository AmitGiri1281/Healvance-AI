import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCard } from "../components";
import { useRef } from "react";
import {
  Code2,
  ShoppingCart,
  Layout,
  Smartphone,
  Server,
  Brain,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    description:
      "Custom, scalable websites using modern technologies with responsive design for all devices.",
    features: ["React/Next.js", "Node.js Backends", "E-commerce Solutions", "API Integration"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "UI/UX Design",
    icon: <Layout className="w-8 h-8 text-primary" />,
    description:
      "Intuitive and visually appealing designs that enhance user experience and drive engagement.",
    features: ["Wireframing & Prototyping", "Figma Designs", "User Testing", "Design Systems"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "E-Commerce Solutions",
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    description:
      "Powerful online stores with secure payment integration and scalable inventory systems.",
    features: ["Shopify Development", "WooCommerce", "Custom Cart Solutions", "Payment Gateways"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    description:
      "Cross-platform mobile apps that are fast, secure, and user-friendly.",
    features: ["React Native", "Flutter", "API Integration", "Push Notifications"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-primary" />,
    description:
      "Robust backend systems to handle complex data processing and API architecture.",
    features: ["Node.js/Express", "MySQL/PostgreSQL", "MongoDB", "Cloud Services (AWS/Firebase)"],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "AI & Automation",
    icon: <Brain className="w-8 h-8 text-primary" />,
    description:
      "Leverage AI to automate tasks, enhance decision-making, and improve productivity.",
    features: ["Chatbots & Virtual Assistants", "Machine Learning", "Process Automation", "Data Analysis"],
    gradient: "from-violet-500 to-purple-500",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 30, -30, 30],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">OUR EXPERTISE</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Ideas Into{" "}
            <span className="relative">
              <span className="relative z-10 text-primary">Digital Excellence</span>
              <motion.div
                className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive digital solutions tailored to your unique business needs, 
            combining cutting-edge technology with exceptional user experiences.
          </p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-12 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { number: "200+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Industry Awards" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }
                },
              }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`} />
              
              <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`} />

                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 bg-gradient-to-br ${service.gradient} bg-opacity-10 rounded-xl shadow-lg`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 group/item"
                    >
                      <CheckCircle2 className={`w-5 h-5 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text [&>path]:stroke-current [&>path]:stroke-[1.5]`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:opacity-100 transition-opacity mt-auto`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span>Start Your Project</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
          <p className="text-gray-500 mt-4 text-sm">
            Join 200+ satisfied clients who've transformed their digital presence
          </p>
        </motion.div>
      </div>
    </section>
  );
}