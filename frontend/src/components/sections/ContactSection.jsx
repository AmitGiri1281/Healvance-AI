// src/components/sections/ContactSection.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General",
    urgency: "Low",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please fill in required fields." });
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", text: "Message sent successfully ✅" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "General",
          urgency: "Low",
          message: "",
        });
      } else {
        setStatus({ type: "error", text: data.message || "Something went wrong ❌" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", text: "Server error ❌" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're a remote-first team, ready to connect from anywhere in the world. Call, email, or send us a message — we’ll reply within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.69l1.5 4.5a1 1 0 01-.5 1.2l-2.3 1.1a11 11 0 005.5 5.5l1.1-2.3a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.7.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Call or WhatsApp</h4>
                  <a href="tel:9205176755" className="text-primary hover:underline">+91 92051 76755</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <a href="mailto:contact@healvance.ai" className="text-primary hover:underline">contact@healvance.ai</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition" required />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition" required />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition" />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition">
                  <option>General</option>
                  <option>Support</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                </select>
              </div>

              {/* Urgency */}
              <div>
                <label htmlFor="urgency" className="block text-gray-700 font-medium mb-2">Urgency</label>
                <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition" required></textarea>
              </div>

              {/* Status Message */}
              {status && <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>{status.text}</p>}

              {/* Submit Button */}
              <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} disabled={loading} className={`w-full ${loading ? "bg-gray-400" : "bg-primary hover:bg-primary-dark"} text-white font-semibold py-3 px-6 rounded-lg shadow-md transition`}>
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
