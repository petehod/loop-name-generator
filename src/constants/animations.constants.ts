import { Variants } from "framer-motion";

export const animationVariants: Variants = {
  bounceAround: {
    x: [0, 3, 3, 3, 0],
    y: [0, 3, 0, -3, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  },
  hover: {
    opacity: 0.9,
    scale: 1.03,
    transition: {
      duration: 0.2,
      bounce: 1
    }
  },
  tap: {
    scale: 0.97,
    transition: {
      duration: 0.2
    }
  },
  shake: {
    x: [0, 0.25, -0.25, 0.25, -0.25, 0],
    transition: {
      duration: 1
    }
  },
  enticeUser: {
    x: [0, 100, 100, 0, -100, -100, 0],
    y: [0, 0, 100, 100, 100, 0, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};
