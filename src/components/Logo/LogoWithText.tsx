"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
export const LogoWithText = ({ disableLink }: { disableLink: boolean }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return disableLink ? (
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
  ) : (
    <Link href={"/"}>
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
    </Link>
  );
};
