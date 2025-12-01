/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables dark mode via .dark class

  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #6366f1, #8b5cf6)",
        "gradient-soft": "linear-gradient(90deg, #4f46e5, #a78bfa)",
        "hero-radial": "radial-gradient(circle at top, #1e1b4b, #0a0a0a)",
      },

      boxShadow: {
        soft: "0 0 20px rgba(99,102,241,0.25)",
        strong: "0 0 35px rgba(139,92,246,0.35)",
      },

      borderRadius: {
        xl2: "1.4rem",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },

      animation: {
        float: "float 3s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease forwards",
      },
    },
  },

  plugins: [],
};
