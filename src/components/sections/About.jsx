import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const cardHover = {
  hover: {
    scale: 1.03,
    y: -6,
    boxShadow: "0px 10px 40px rgba(99,102,241,0.15)",
    transition: { type: "spring", stiffness: 200 }
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto relative">

      {/* Animated Gradient Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 -z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-10 left-0 w-72 h-72 bg-indigo-600/30 blur-[110px] rounded-full"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{ repeat: Infinity, duration: 8, delay: 1 }}
          className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/30 blur-[120px] rounded-full"
        ></motion.div>
      </motion.div>

      {/* Section Title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-white text-center"
      >
        About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Me</span>
      </motion.h2>

      {/* Content Grid */}
      <div className="mt-16 grid md:grid-cols-2 gap-14">

        {/* Left Section - Paragraphs */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          <motion.p className="text-gray-300" variants={fadeUp}>
            I'm <span className="text-white font-semibold">Joseph</span>, a dedicated 
            <span className="text-indigo-400 font-semibold"> Full-Stack Web Developer (Fresher)</span> 
            passionate about creating immersive, modern, and user-focused digital experiences. 
            With strong foundations in 
            <span className="text-white font-semibold"> Software Engineering, Full-Stack Python Development, and Web Technologies</span>, 
            I engineer clean, optimized, high-performance web applications.
          </motion.p>

          <motion.p className="text-gray-300 mt-6" variants={fadeUp}>
            As a B.Tech IT graduate (2025), I bring real-world experience in 
            <span className="text-indigo-400"> React.js, Flask, MySQL, Tailwind CSS, REST APIs, and JavaScript (ES6+)</span>.
            My work includes e-commerce platforms, learning systems, and full-stack applications built with production-ready architecture.
          </motion.p>

          <motion.p className="mt-6 text-gray-300 font-medium" variants={fadeUp}>
            I specialize in:
          </motion.p>

          <motion.ul
            className="mt-4 list-disc ml-6 space-y-3 text-gray-400"
            variants={fadeUp}
          >
            <li>Writing clean, scalable, maintainable code aligned with industry standards</li>
            <li>Building modern, polished UIs using React, Tailwind CSS & animations</li>
            <li>Developing fully responsive, mobile-first applications</li>
            <li>Designing dynamic UIs with efficient state management</li>
            <li>Optimizing performance, accessibility, and load speed</li>
            <li>Integrating REST APIs with real-time, data-driven interactions</li>
          </motion.ul>
        </motion.div>

        {/* Right Section - Animated Cards */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {/* Education Card */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <p className="text-gray-300 mt-2">
              B.Tech in Information Technology – Bharathidasan Engineering College  
              <br />Nattrampalli, Tirupathur, Tamil Nadu
            </p>
            <p className="text-sm text-gray-400 mt-1">(2021 - 2025)</p>
          </motion.div>

          {/* Additional Education Card */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white">Additional Education</h3>
            <p className="text-gray-300 mt-2">
              Full-Stack Python Web Development – Besant Technologies, Bangalore  
              <br />(6-Month Offline Program, 2025)
            </p>

            <a 
              href="https://josephstevenit-alt.github.io/josephcertificate/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 text-sm hover:text-blue-500 underline mt-2 inline-block"
            >
              View Certificate →
            </a>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white">Tech Stack</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React.js",
                "Tailwind CSS",
                "JavaScript",
                "HTML / CSS",
                "Bootstrap",
                "Git / GitHub",
                "REST APIs",
                "Python",
                "Flask",
                "MySQL",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 bg-white/10 border border-white/10 rounded-lg text-sm text-gray-200 shadow-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
