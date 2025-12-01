// -----------------------------------------------------------
//  PREMIUM ANIMATION VARIANTS FOR FRAMER MOTION
// -----------------------------------------------------------

export const fadeIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const fadeUp = (delay = 0, distance = 20, duration = 0.6) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const fadeDown = (delay = 0, distance = -20, duration = 0.6) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const fadeLeft = (delay = 0, distance = 30, duration = 0.6) => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const fadeRight = (delay = 0, distance = -30, duration = 0.6) => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const scaleUp = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const slideIn = (direction = "left", delay = 0, duration = 0.6) => {
  const distance = 60;

  const dir = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance },
  }[direction];

  return {
    hidden: { opacity: 0, ...dir },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration, ease: "easeOut" },
    },
  };
};

// STAGGER CHILDREN (cards, grid items, list items)
export const staggerContainer = (delay = 0, stagger = 0.15) => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
});

// FLOATING (Hero image / icons)
export const float = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
