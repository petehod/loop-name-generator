"use client";
import { LINK_TREE_LINK } from "@/constants/links.constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { LogoWithText } from "../Logo";

export const MadeByDean = () => {
  return (
    <div className={`flex text-white mb-2`}>
      <h2 className={`text-2 font-light mr-2`}>
        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.25 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={LINK_TREE_LINK}>Made by</Link>
        </motion.div>
      </h2>
      <Link href={LINK_TREE_LINK}>
        <LogoWithText />
      </Link>
    </div>
  );
};
