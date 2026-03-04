import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {

  const initialState = {
    name: "",
    email: "",
    phone: "",
    subject: "General",
    urgency: "Low",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      setStatus({ type: "error", text: "Please fill all required fields ❌" });
      return;
    }

    if (!isValidEmail(trimmedData.email)) {
      setStatus({ type: "error", text: "Please enter a valid email ❌" });
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const API_URL =
        import.meta.env.VITE_API_URL ||
        "https://healvance-backend.onrender.com";

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trimmedData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus({
        type: "success",
        text: "Message sent successfully ✅",
      });

      setFormData(initialState);

    } catch (error) {
      console.error("Submit Error:", error);
      setStatus({
        type: "error",
        text: "Server error ❌ Please try again later.",
      });
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
              We're ready to connect with you.
            </p>

            <div className="space-y-6">

              {/* Phone */}
              <div>
                <h4 className="font-semibold text-gray-900">
                  Call or WhatsApp
                </h4>
                <a
                  href="tel:+919935344361"
                  className="text-primary hover:underline"
                >
                  +91 9935344361
                </a>
              </div>

              {/* Email */}
              <div>
                <h4 className="font-semibold text-gray-900">
                  Email Us
                </h4>
                <a
                  href="mailto:healvanceai@gmail.com"
                  className="text-primary hover:underline"
                >
                  healvanceai@gmail.com
                </a>
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

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option>General</option>
                <option>Support</option>
                <option>Partnership</option>
                <option>Feedback</option>
              </select>

              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              {status && (
                <p className={`text-sm ${
                  status.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}>
                  {status.text}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 text-white font-semibold rounded-lg ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-primary-dark"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}