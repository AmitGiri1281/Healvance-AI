// src/components/common/ServiceCard.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="p-8">
        <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center text-3xl mb-6`}>
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <div className="space-y-2">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-8 pb-8">
        <Link 
          to={`/services#${service.id}`}
          className="text-primary font-semibold hover:text-primary-dark flex items-center"
        >
          Learn more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}