import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 lg:px-10 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-extrabold text-white shadow-xl">
            JOE
          </div>
          <span className="text-xl font-semibold tracking-wide text-white hidden sm:block">
            Joseph
          </span>
        </motion.div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 items-center text-white font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative group transition-all text-lg"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg hover:opacity-90 transition font-semibold"
          >
            Resume
          </a>
        </ul>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? (
            <motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
              <svg className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 px-6 py-6"
        >
          <ul className="flex flex-col gap-6 text-white text-lg font-medium">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-indigo-400 transition"
              >
                {item.name}
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-center mt-4 shadow-lg"
            >
              Resume
            </a>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
