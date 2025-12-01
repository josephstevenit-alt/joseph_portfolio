import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-black/40 backdrop-blur-xl relative overflow-hidden">
      
      {/* Floating Gradient Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-52 w-52 bg-indigo-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-8">

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex gap-7"
        >
          {[
            {
              icon: "fa-brands fa-github",
              url: "https://github.com/josephstevenit-alt"
            },
            {
              icon: "fa-brands fa-linkedin",
              url: "https://www.linkedin.com/in/josephabragam5501/"
            },
            {
              icon: "fa-solid fa-envelope",
              url: "mailto:josephstevenit@gmail.com"
            }
          ].map((item, index) => (
            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-white/90 hover:text-indigo-400 transition text-2xl drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            >
              <i className={item.icon}></i>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-sm text-gray-400 text-center leading-relaxed"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium tracking-wide">
            Joseph
          </span>
          . Portfolio website.
        </motion.p>

        {/* Animated Gradient Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "110px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.7)]"
        ></motion.div>

      </div>
    </footer>
  );
}
