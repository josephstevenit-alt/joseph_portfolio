import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const timeline = [
    {
      year: "2025",
      role: "Frontend Developer (Fresher)",
      company: "Open to Opportunities",
      description:
        "Specializing in modern frontend development with React, JavaScript, TailwindCSS, and UI/UX-focused design. Actively improving performance-optimized web interfaces.",
      skills: ["React", "Tailwind", "JavaScript", "UI/UX", "Git"],
    },
    {
      year: "2023 - 2024",
      role: "Full Stack Student Developer",
      company: "College Projects",
      description:
        "Built real-world applications such as E-Commerce Frontend and E-Learning Exam System with authentication, dashboards and secure REST APIs.",
      skills: ["React", "Flask", "MySQL", "APIs", "Frontend Design"],
    },
    {
      year: "2021 - 2025",
      role: "B.Tech IT Student",
      company: "Anna University",
      description:
        "Studied Data Structures, DBMS, Web Development, Operating Systems, Python, C and Software Engineering fundamentals.",
      skills: ["Python", "C", "DBMS", "Networking"],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 max-w-6xl mx-auto">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.08, 0.2, 0.08], scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-[130px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.08, 0.2, 0.08], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"
        />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white drop-shadow-lg"
      >
        My <span className="text-indigo-400">Experience</span>
      </motion.h2>

      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-40 bottom-10 w-1 bg-white/10 rounded-full hidden md:block"></div>

      {/* Timeline Cards */}
      <div className="mt-16 space-y-16 relative">

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`
              relative md:w-[48%] p-8 rounded-3xl 
              bg-white/10 backdrop-blur-xl border border-white/10 
              shadow-xl hover:shadow-indigo-500/20 transition
              ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"}
            `}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute top-8 w-4 h-4 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50 hidden md:block
                ${index % 2 === 0 ? "-right-8" : "-left-8"}
              `}
            />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <span className="text-indigo-400 text-sm font-semibold mt-2 md:mt-0">
                {item.year}
              </span>
            </div>

            {/* Company */}
            <p className="text-sm text-indigo-300 font-medium mt-1 underline decoration-indigo-500/40">
              {item.company}
            </p>

            {/* Description */}
            <p className="text-gray-300 mt-4 leading-relaxed">{item.description}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
