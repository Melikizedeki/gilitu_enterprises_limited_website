// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "df82dd19-f8ec-41cd-b23f-6b33263b1b48");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      toast.error(data.message || "An error occurred.");
      setResult("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-50 flex flex-col items-center justify-start px-4 py-12">
      <ToastContainer />

      {/* Google Map */}
      <div className="w-full bg-white shadow-2xl rounded-2xl overflow-hidden mb-10">
        <motion.h3
          className="text-3xl font-bold text-sky-800 text-center py-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Find Us on the Map
        </motion.h3>
        <div className="w-full h-[500px]">
          <iframe
            title="Gilitu Enterprises Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=-3.690212,33.413881&hl=es;z=18&output=embed&t=k"
          ></iframe>
        </div>
      </div>

      {/* Address Info */}
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-10 mb-10">
        <motion.h3
          className="text-3xl font-bold text-sky-800 mb-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Address
        </motion.h3>
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Gilitu Enterprises Limited<br />
          P.O Box 728<br />
          Shinyanga, Tanzania
        </motion.p>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Phone: +255 718 288 878<br />
          Email: <a href="mailto:support@gilitu.co.tz" className="text-sky-600 hover:underline">info@gilitu.com</a>
        </motion.p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-10">
        <motion.h2
          className="text-5xl font-extrabold text-center text-sky-800 mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-10 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Have questions or feedback? We'd love to hear from you. Fill out the form below, and our team will get back to you as soon as possible.
        </motion.p>

        <form onSubmit={onSubmit} className="space-y-8">
          {/* Name Field */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-sky-500 focus:border-sky-500 transition"
              required
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-sky-500 focus:border-sky-500 transition"
              required
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us what's on your mind"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-sky-500 focus:border-sky-500 transition"
              required
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-full hover:from-sky-700 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              {result ? result : "Send Message"}
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
