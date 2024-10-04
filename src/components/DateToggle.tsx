"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationVariants } from "@/constants/animations.constants";
import { useNameParams } from "@/context/NameParamsContext";
import { colors } from "@/constants/colors";
export const DateToggle = () => {
  const { includeDate, toggleDate } = useNameParams();
  const [toggle, setToggle] = useState(includeDate);
  return (
    <div className="flex items-center gap-1  mb-2">
      <motion.div
        variants={animationVariants}
        whileTap={"tap"}
        whileHover={"hover"}
        className={`cursor-pointer  	items-center h-6 w-12  rounded-full	flex  
          `}
        onClick={() => {
          toggleDate();
          setToggle(!toggle);
        }}
        style={{
          justifyContent: toggle ? "flex-end" : "flex-start",
          backgroundColor: !toggle ? colors.white : colors.primary
        }}
        layout={"position"}
      >
        <motion.div
          className={`h-full w-6 rounded-full cursor-pointer border-solid border-1 border-neutral-800
            `}
          style={{ backgroundColor: toggle ? colors.white : colors.primary }}
          layout={"position"}
        />
      </motion.div>
      <p className="text-1 font-semibold">Include date</p>
    </div>
  );
};
