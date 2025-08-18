// src/components/common/Footer.jsx
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const services = [
    "Web Development",
    "UI/UX Design",
    "SEO Optimization",
    "Custom Software",
  ];

  const company = ["About Us", "Careers", "Blog", "Contact"];

  const socials = [
    { icon: FaFacebookF, link: "https://www.facebook.com/people/Amit-Giri/pfbid02cXeQns1Tv1SuMcYr9RBTFgKoxzQHceNV95RqF7Ar6B4QVbxpJKhy2suPr4HmGxddl/", label: "Facebook" },
    { icon: FaTwitter, link: "https://www.linkedin.com/in/amitgiri8/", label: "Twitter" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/amitgiri8/", label: "LinkedIn" },
    { icon: FaGithub, link: "https://github.com/AmitGiri1281", label: "GitHub" },
  ];

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
              Innovative digital solutions for your business — from web apps to
              AI-powered tools.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Social */}
          <address className="not-italic">
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-primary-light" />
                <a
                  href="tel:9205176755"
                  className="text-gray-300 hover:text-white transition"
                >
                  +91 92051 76755
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-primary-light" />
                <a
                  href="mailto:healvanceai@gmail.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  healvanceai@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {socials.map(({ icon: Icon, link, label }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15 }}
                  className="p-2 bg-primary/20 rounded-full text-gray-300 hover:text-white hover:bg-primary transition"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Healvance AI. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
