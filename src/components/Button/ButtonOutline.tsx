type ButtonOutlineProps = {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
};
import { animationVariants } from "@/constants/animations.constants";
import { motion } from "framer-motion";
export const ButtonOutline = ({
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
      className="h-12 bg-transparent border-2 border-white rounded w-full"
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
