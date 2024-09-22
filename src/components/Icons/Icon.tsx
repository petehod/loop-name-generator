"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Icon as IconifyIcon, IconProps } from "@iconify/react";
import { animationVariants } from "@/constants/animations.constants";
export const Icon = memo(
  ({
    backgroundColor,
    iconColor,
    ...props
  }: IconProps & { backgroundColor?: string; iconColor?: string }) => {
    return (
      <motion.div
        className={`${backgroundColor ?? "bg-white"} ${
          iconColor ?? "text-dark"
        } rounded-full p-2 cursor-pointer`}
        variants={animationVariants}
        whileTap={"tap"}
        whileHover={`hover`}
      >
        <IconifyIcon height={32} width={32} {...props} />
      </motion.div>
    );
  }
);
