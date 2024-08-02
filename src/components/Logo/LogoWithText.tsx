"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export const LogoWithText = () => {
  return (
    // TODO: turn into variant
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.25 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        alt="logo for dean"
        src={"/images/logo-with-text.png"}
        height={20}
        width={120}
      />
    </motion.div>
  );
};
