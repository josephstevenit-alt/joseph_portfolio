import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: "fa-brands fa-react", color: "text-cyan-500", level: 90 },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400", level: 85 },
    { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt", color: "text-blue-500", level: 80 },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-600", level: 95 },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "text-blue-600", level: 90 },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "text-purple-600", level: 80 },
    { name: "Git / GitHub", icon: "fa-brands fa-github", color: "text-gray-800", level: 85 },
    { name: "REST APIs", icon: "fa-solid fa-network-wired", color: "text-green-500", level: 75 },
    { name: "Python", icon: "fa-brands fa-python", color: "text-yellow-500", level: 70 },
    { name: "Flask", icon: "fa-solid fa-flask", color: "text-gray-700", level: 60 },
    { name: "MySQL", icon: "fa-solid fa-database", color: "text-blue-500", level: 75 },
  ];

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-black mb-16"
      >
        My{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
          Skills
        </span>
      </motion.h2>

      {/* Fixed Perfect Grid (No full width) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="
              w-48 h-48 
              bg-white 
              rounded-3xl 
              shadow-lg 
              border border-gray-200 
              p-6 
              flex flex-col 
              items-center 
              justify-center 
              text-center
            "
          >
            <div className={`text-5xl mb-3 ${skill.color}`}>
              <i className={skill.icon}></i>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {skill.name}
            </h3>

            <p className="text-gray-600 font-medium mt-1">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
