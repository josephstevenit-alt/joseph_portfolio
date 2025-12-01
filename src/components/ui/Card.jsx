import React from "react";
import { motion } from "framer-motion";

export default function Card({
  title,
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { scale: 1.03 } : {}}
      transition={{ duration: 0.4 }}
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-6 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      )}

      {/* Content */}
      <div className="text-gray-300">{children}</div>
    </motion.div>
  );
}
