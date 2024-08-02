type ButtonOutlineProps = {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  text: string;
  backgroundColor?: "primary" | "white" | "dark";
  textColor?: "primary" | "white" | "dark";
  onClick?: () => void;
};
import { animationVariants } from "@/constants/animations.constants";
import { motion } from "framer-motion";
export const Button = ({
  disabled,
  type = "button",
  text,
  onClick,
}: ButtonOutlineProps) => {
  return (
    <motion.button
      variants={animationVariants}
      whileTap={`tap`}
      whileHover={`hover`}
      className={`h-12  w-full bg-primary text-white rounded`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
