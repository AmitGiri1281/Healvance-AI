import { motion } from "framer-motion";
import { ServiceCard } from "../components";
import {
  Code2,
  ShoppingCart,
  Layout,
  Smartphone,
  Server,
  Brain,
} from "lucide-react"; // Modern icon set

const services = [
  {
    title: "Web Development",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    description:
      "Custom, scalable websites using modern technologies with responsive design for all devices.",
    features: ["React/Next.js", "Node.js Backends", "E-commerce", "API Integration"],
  },
  {
    title: "UI/UX Design",
    icon: <Layout className="w-8 h-8 text-primary" />,
    description:
      "Intuitive and visually appealing designs that enhance user experience and drive engagement.",
    features: ["Wireframing", "Prototyping", "Figma Designs", "User Testing"],
  },
  {
    title: "E-Commerce Solutions",
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    description:
      "Powerful online stores with secure payment integration and scalable inventory systems.",
    features: ["Shopify", "WooCommerce", "Custom Cart", "Payment Gateways"],
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    description:
      "Cross-platform mobile apps that are fast, secure, and user-friendly.",
    features: ["React Native", "Flutter", "API Integration", "Push Notifications"],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-primary" />,
    description:
      "Robust backend systems to handle complex data processing and API architecture.",
    features: ["Node.js", "Express", "MySQL/PostgreSQL", "Firebase"],
  },
  {
    title: "AI & Automation",
    icon: <Brain className="w-8 h-8 text-primary" />,
    description:
      "Leverage AI to automate tasks, enhance decision-making, and improve productivity.",
    features: ["Chatbots", "Machine Learning", "Process Automation", "Data Analysis"],
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative digital solutions to help you grow, stand out, and succeed.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition rounded-2xl p-6 border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
