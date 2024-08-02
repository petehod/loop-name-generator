"use client";
import Link from "next/link";
import { memo } from "react";
import { LogoWithText } from "@/components/Logo";
import { HOME_LINK, LINK_TREE_LINK } from "@/constants/links.constants";
import { motion } from "framer-motion";
export const Header = memo(() => {
  return (
    <header
      className={`w-full flex flex-col md:flex-row justify-center items-center bg-transparent mb-2  text-white`}
    >
      <h1 className="text-3 font-semibold mr-2.5 mb-2">
        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.25 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={HOME_LINK}>Quickie</Link>{" "}
          <span className="text-2.5 font-light">by</span>{" "}
        </motion.div>
      </h1>

      <Link href={LINK_TREE_LINK}>
        <LogoWithText />
      </Link>
    </header>
  );
});
