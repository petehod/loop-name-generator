"use client";
import { LINK_TREE_LINK } from "@/constants/links.constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { LogoWithText } from "../Logo";
import { useState, useEffect } from "react";

export const MadeByDean = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <div className={`flex text-white mb-2`}>
      <Link className="flex" href={LINK_TREE_LINK}>
        <h2 className={`text-2 font-light mr-2`}>Made by</h2>

        <LogoWithText disableLink={true} />
      </Link>
    </div>
  );
};
