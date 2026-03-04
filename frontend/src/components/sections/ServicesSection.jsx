import { motion } from "framer-motion";
import { ServiceCard } from "../common";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesSection({ services }) {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">
              Enterprise Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 
                             bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We help businesses build scalable, secure, and intelligent digital
            products through modern technology and AI-driven solutions.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border border-gray-200 rounded-3xl p-10 md:p-14"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to get started?
              </h3>
              <p className="text-gray-600 max-w-xl">
                Let’s discuss your project and see how we can help you grow with
                modern digital solutions.
              </p>
            </div>

            <button className="group flex items-center gap-2 px-8 py-4 
                               bg-blue-600 text-white font-semibold rounded-full
                               hover:bg-blue-700 transition">
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Trust */}
        <div className="mt-20 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-8">
            Trusted By Modern Teams
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-gray-600 text-sm">
            <span>ISO 27001</span>
            <span>AWS Partner</span>
            <span>Microsoft Gold</span>
            <span>Google Cloud</span>
          </div>
        </div>

      </div>
    </section>
  );
}
