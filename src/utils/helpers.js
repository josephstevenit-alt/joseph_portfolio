
// -----------------------------------------------------------
//  GLOBAL HELPER FUNCTIONS FOR PORTFOLIO
// -----------------------------------------------------------

/* Capitalize first letter */
export const capitalize = (text = "") => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/* Format date to readable string (e.g., Jan 2024) */
export const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

/* Smooth scroll to section */
export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  window.scrollTo({
    top: el.offsetTop - 60,
    behavior: "smooth",
  });
};

/* Generate unique ID */
export const uid = () => {
  return Math.random().toString(36).substring(2, 10);
};

/* Check if value is empty */
export const isEmpty = (value) => {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  );
};

/* Clamp number between min & max */
export const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

/* Debounce — delays function execution */
export const debounce = (func, delay = 300) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

/* Throttle — limits function execution */
export const throttle = (func, limit = 200) => {
  let inThrottle = false;

  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/* Random pastel color (for tags, skills, badges) */
export const randomPastel = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
};
