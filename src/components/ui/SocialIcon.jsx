import React from "react";
import { motion } from "framer-motion";

export default function SocialIcon({
  icon,
  href,
  size = "text-2xl",
  color = "text-white",
  hoverColor = "hover:text-indigo-400",
  className = "",
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${size} 
        ${color} 
        ${hoverColor}
        transition
        ${className}
      `}
    >
      <i className={icon}></i>
    </motion.a>
  );
}
