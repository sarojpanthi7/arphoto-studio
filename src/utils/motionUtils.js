export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const heroVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 0.9,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
