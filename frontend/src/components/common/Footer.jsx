// src/components/common/Footer.jsx
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <motion.footer
      className="bg-primary-dark text-white py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Healvance AI</h3>
            <p className="text-gray-300 leading-relaxed">
              Innovative digital solutions for your business — from web apps to AI-powered tools.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'SEO Optimization', 'Custom Software'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition duration-200">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-primary-light" />
                <a href="tel:9205176755" className="text-gray-300 hover:text-white transition">+91 92051 76755</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-primary-light" />
                <a href="mailto:contact@healvance.ai" className="text-gray-300 hover:text-white transition">contact@healvance.ai</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaLinkedinIn, link: "#" },
                { icon: FaGithub, link: "#" }
              ].map(({ icon: Icon, link }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="p-2 bg-primary/20 rounded-full text-gray-300 hover:text-white hover:bg-primary transition"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Healvance AI. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
