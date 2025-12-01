import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ title, highlight, subtitle }) {
  return (
    <div className="text-center mb-14">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white"
      >
        {title}{" "}
        <span className="text-indigo-400">
          {highlight}
        </span>
      </motion.h2>

      {/* Underline Gradient */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-[3px] mx-auto mt-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-4 text-sm md:text-base max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
