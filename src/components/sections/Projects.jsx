import React from "react";
import { motion } from "framer-motion";

// images
import project1 from "../../assets/projects/ecommerce.png";
import project2 from "../../assets/projects/elearning.png";

export default function Projects() {
  const projectList = [
    {
      title: "Josestore — E-Commerce Frontend",
      description:
        "A polished e-commerce UI built with React and Tailwind. Fully responsive product grid, elegant cart UI, and modern component structure.",
      image: project1,
      link: "https://josephstevenit-alt.github.io/Josestore-frontend-project/",
      tech: ["React", "Tailwind", "Responsive UI"],
    },
    {
      title: "Smart E-Learning Platform",
      description:
        "A full-stack online exam system using React, Flask, and MySQL. Includes authentication, exam timer, analytics dashboard, and secure API.",
      image: project2,
      link: "#",
      tech: ["React", "Flask", "MySQL", "REST API"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-black"
      >
        My{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
          Projects
        </span>
      </motion.h2>

      {/* Grid */}
      <div className="mt-16 grid sm:grid-cols-2 gap-10">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="
              bg-white 
              rounded-3xl 
              shadow-lg 
              hover:shadow-2xl 
              border border-gray-200 
              overflow-hidden 
              transition-all 
              cursor-pointer
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition transform duration-700 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 
                      text-xs 
                      bg-gray-100 
                      border border-gray-300 
                      rounded-lg 
                      text-gray-700
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block mt-5 
                  px-5 py-2 
                  rounded-lg 
                  bg-indigo-600 
                  hover:bg-indigo-700 
                  text-white 
                  text-sm 
                  shadow-md 
                  transition
                "
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
