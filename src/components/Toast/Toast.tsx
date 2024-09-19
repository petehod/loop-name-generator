"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DEFAULT_TIMEOUT } from "@/constants/timeout.constants";
import { animationVariants } from "@/constants/animations.constants";

interface ToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  duration = DEFAULT_TIMEOUT,
  onClose,
  backgroundColor = "bg-white",
  textColor = "text-dark"
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          variants={animationVariants}
          whileHover={"hover"}
          whileTap={"tap"}
          className={`cursor-pointer fixed bottom-12 inset-x-4 md:inset-x-1/3 px-4  flex items-center justify-center px-4 py-2 rounded ${backgroundColor} ${textColor} z-50`}
          onClick={() => setVisible(false)}
        >
          <p className={`text-1 font-semibold`}>{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
