import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/profile/joseph.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-14 px-6 md:px-10 overflow-hidden bg-[#0A0A0A]"
    >

      {/* BACKGROUND GLOW ANIMATIONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-10 w-80 h-80 bg-indigo-500/20 blur-[150px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 blur-[170px] rounded-full"
      />

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl relative z-10"
      >
        {/* Animated Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Hi, I'm{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-lg"
          >
            Joseph
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-lg text-gray-300 leading-relaxed"
        >
          {" "}
          <span className="text-white font-semibold">
            Full-Stack Web Developer
          </span>{" "}
          a dedicated  (Fresher)passionate about creating immersive, modern, and user-focused digital experiences. With strong foundations in Software Engineering, Full-Stack Python Development, and Web Technologies, I engineer clean, optimized, high-performance web applications.
        </motion.p>

        {/* Smooth Floating Stats */}
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          {[
            { label: "Fresher", sub: "Experience" },
            { label: "python full stack web developer", sub: "web developer" },
            { label: "Tamil nadu", sub: " location tirupathur and chennai" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.05 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-[0px_0px_25px_rgba(255,255,255,0.05)] transition"
            >
              <h3 className="text-lg font-bold text-white">{stat.label}</h3>
              <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 
            transition text-white shadow-lg shadow-indigo-700/40"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 
            hover:bg-white/20 transition text-white"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT PROFILE CARD — FLOAT ANIMATION */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.03, y: -6 }}
        className="w-full max-w-sm relative z-10"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="p-5 bg-white/5 backdrop-blur-xl border border-white/10 
          shadow-2xl rounded-2xl hover:shadow-indigo-500/30 transition"
        >
          <img
            src={profileImg}
            alt="profile"
            className="rounded-2xl w-full object-cover shadow-lg"
          />

          <div className="mt-4 flex justify-between items-center">
            <div>
              <h3 className="text-white font-semibold text-lg">Joseph</h3>
              <p className="text-xs text-gray-400">Full-Stack Web Developer</p>
            </div>

            <a
              href="https://github.com/josephstevenit-alt"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-indigo-400 hover:underline"
            >
              GitHub →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
