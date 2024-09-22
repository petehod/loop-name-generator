import { animationVariants } from "@/constants/animations.constants";
import { motion, MotionProps } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

type ButtonOutlineProps = ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps & {
    text: string;
  };

export const BUTTON_STYLES = `h-12 w-full bg-primary text-white rounded`;

export const Button = ({ text, ...props }: ButtonOutlineProps) => {
  return (
    <motion.button
      variants={animationVariants}
      whileTap="tap"
      whileHover="hover"
      className={BUTTON_STYLES}
      {...props}
    >
      {text}
    </motion.button>
  );
};
