"use client";
import { LoginLogoutButton } from "../Button";
import { usePathname } from "next/navigation";
import { shouldHideLoginLogoutButton } from "@/utils/navigation.utils";

export default function Nav() {
  const path = usePathname();
  const hideLoginLogoutButton = shouldHideLoginLogoutButton(path);

  return (
    <nav className=" w-full flex flex-col justify-end items-center">
      {!hideLoginLogoutButton && <LoginLogoutButton />}
    </nav>
  );
}
