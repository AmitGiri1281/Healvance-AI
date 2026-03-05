// src/components/common/ServiceCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function ServiceCard({ service, index }) {
  // Dynamic gradient backgrounds based on service color
  const getGradient = (color) => {
    const gradients = {
      'bg-blue-100': 'from-blue-500 to-cyan-400',
      'bg-green-100': 'from-emerald-500 to-teal-400',
      'bg-purple-100': 'from-purple-500 to-pink-400',
      'bg-amber-100': 'from-amber-500 to-orange-400',
      'bg-red-100': 'from-rose-500 to-red-400',
      'bg-indigo-100': 'from-indigo-500 to-blue-400',
    };
    return gradients[color] || 'from-primary to-secondary';
  };

  return (
    <motion.article
      className="group relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Background Gradient Overlay - Appears on Hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${getGradient(service.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        initial={false}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-[100px] -z-10" />
      
      {/* Main Content */}
      <div className="relative p-8">
        {/* Header with Icon and Badge */}
        <div className="flex items-start justify-between mb-6">
          {/* Icon Container with Modern Design */}
          <div className="relative">
            <motion.div
              className={`w-16 h-16 rounded-2xl ${service.color} bg-opacity-20 flex items-center justify-center text-3xl relative overflow-hidden`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Animated Background Shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative z-10">{service.icon}</span>
            </motion.div>
            
            {/* Featured Badge - Only if service is popular */}
            {service.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1"
              >
                <Sparkles size={12} />
                <span>Popular</span>
              </motion.div>
            )}
          </div>

          {/* Price Tag - If price exists */}
          {service.price && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-right"
            >
              <span className="text-sm text-gray-500">Starting from</span>
              <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {service.price}
              </div>
            </motion.div>
          )}
        </div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.1 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {service.description}
          </p>
        </motion.div>

        {/* Features with Modern Icons */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <motion.div
              key={`${service.id}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 + index * 0.1 }}
              className="flex items-center gap-3 group/item"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors duration-300">
                <CheckCircle2 size={14} className="text-green-600" />
              </div>
              <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Learn More Link */}
          <Link
            to={`/services#${service.id}`}
            className="group/link inline-flex items-center text-gray-600 hover:text-primary font-medium transition-colors duration-300"
          >
            <span>Learn more</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight size={18} className="ml-2 group-hover/link:ml-3 transition-all duration-300" />
            </motion.div>
          </Link>

          {/* Duration Badge - If duration exists */}
          {service.duration && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-sm px-4 py-2 bg-gray-50 rounded-full text-gray-600 font-medium border border-gray-100"
            >
              ⏱️ {service.duration}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Accent Line - Appears on Hover */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradient(service.color)}`}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}