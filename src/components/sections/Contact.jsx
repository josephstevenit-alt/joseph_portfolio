import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 max-w-6xl mx-auto">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1.15, 1, 1.15] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-16 right-10 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"
        />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white drop-shadow-lg"
      >
        Contact <span className="text-indigo-400">Me</span>
      </motion.h2>

      {/* Main Grid */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03, y: -4 }}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/20 transition"
        >
          <h3 className="text-2xl font-semibold text-white">Let’s Connect</h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            I'm always open to discussing web development, collaboration, and new opportunities.
            Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-5 text-gray-300 text-lg">
            <p className="flex items-center">
              <i className="fa-solid fa-envelope text-indigo-400 text-xl mr-4"></i>
              josephstevenit@gmail.com
            </p>

            <p className="flex items-center">
              <i className="fa-solid fa-location-dot text-indigo-400 text-xl mr-4"></i>
              Tirupathur, Tamil Nadu
            </p>

            <p className="flex items-center">
              <i className="fa-brands fa-linkedin text-indigo-400 text-xl mr-4"></i>
              <a
                href="https://www.linkedin.com/in/josephabragam5501/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn Profile
              </a>
            </p>

            <p className="flex items-center">
              <i className="fa-brands fa-github text-indigo-400 text-xl mr-4"></i>
              <a
                href="https://github.com/josephstevenit-alt"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub Profile
              </a>
            </p>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/20 transition"
        >
          {/* Name Field */}
          <label className="text-sm text-gray-300">Your Name</label>
          <input
            type="text"
            required
            className="mt-2 w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Enter your name"
          />

          {/* Email Field */}
          <label className="text-sm text-gray-300 mt-5 block">Your Email</label>
          <input
            type="email"
            required
            className="mt-2 w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Enter your email"
          />

          {/* Message Field */}
          <label className="text-sm text-gray-300 mt-5 block">Message</label>
          <textarea
            required
            className="mt-2 w-full p-3 rounded-xl h-32 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Write your message..."
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl text-white font-semibold shadow-lg shadow-indigo-700/30"
          >
            Send Message
          </button>

          {/* Success Message */}
          {sent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-400 text-sm"
            >
              ✔ Your message has been sent! (Demo Only)
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
