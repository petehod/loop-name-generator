"use client";
import { LoginLogoutButton } from "../Button";
import { usePathname } from "next/navigation";
import { shouldHideLoginLogoutButton } from "@/utils/navigation.utils";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Nav() {
  const path = usePathname();
  const hideLoginLogoutButton = shouldHideLoginLogoutButton(path);

  return (
    <nav className=" w-full flex gap-12 justify-end items-end">
      <Link className="text-white" href={`/edit-profile`}>
        Profile
      </Link>

      {!hideLoginLogoutButton && <LoginLogoutButton />}
    </nav>
  );
}
