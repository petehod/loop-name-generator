"use client";
import Link from "next/link";
import { memo } from "react";
import { LogoWithText } from "@/components/Logo";
import { HOME_LINK, LINK_TREE_LINK } from "@/constants/links.constants";
import { motion } from "framer-motion";
export const Header = memo(() => {
  return (
    <header
      className={`w-full text-center flex justify-center items-center bg-transparent mb-2  text-white`}
    >
      <h1 className="text-3 font-semibold  mb-2">Loop Name Generator</h1>
    </header>
  );
});
