import React from "react";
import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
}) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition shadow-md flex items-center justify-center";

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20",
    outline:
      "border border-white/20 bg-white/10 text-white hover:bg-white/20",
    ghost:
      "text-white hover:bg-white/10",
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const MotionButton = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={buttonStyles}
    >
      {children}
    </motion.button>
  );

  // If the button has href → return <a>
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        target="_blank"
        rel="noreferrer"
        className={buttonStyles}
      >
        {children}
      </motion.a>
    );
  }

  return MotionButton;
}
