import { useVisibleIcon } from "@/context/VisibleIconContext";
import React from "react";
import { motion } from "framer-motion";
import { animationVariants } from "@/constants/animations.constants";
import { useToggleDate } from "@/context/DateContext";
export const DateToggle = () => {
  const { includeDate, toggleDate } = useToggleDate();

  return (
    <div className="flex items-center gap-1  mb-2">
      <motion.div
        variants={animationVariants}
        whileTap={"tap"}
        whileHover={"hover"}
        className={`cursor-pointer toggle__outer 	items-center h-6 w-12  rounded-full	flex
            ${
              includeDate
                ? "justify-end  bg-primary"
                : "justify-start  bg-light"
            }`}
        onClick={() => {
          toggleDate();
        }}
      >
        <div
          className={`toggle__inner h-full w-6 rounded-full cursor-pointer border-solid border-1 border-neutral-800
            ${includeDate ? "bg-white" : "bg-primary"}`}
        ></div>
      </motion.div>
      <p className="text-1 font-semibold">Include date</p>
    </div>
  );
};
