"use client";
import { LoginLogoutButton } from "../Button";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { NAV_LINKS } from "@/constants/links.constants";
import { useMemo } from "react";

export default function Nav() {
  const { isLoggedIn } = useUser();

  const links = useMemo(() => {
    if (!isLoggedIn) return NAV_LINKS.filter((link) => !link.protectedRoute);
    else return NAV_LINKS;
  }, [isLoggedIn]);

  return (
    <nav className=" w-full flex gap-12 justify-end items-end">
      {links.map((link) => (
        <Link key={link.link} className="text-white" href={link.link}>
          {link.name}
        </Link>
      ))}

      <LoginLogoutButton />
    </nav>
  );
}
