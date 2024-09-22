"use client";
import { useUser } from "@/context/UserContext";
import { LoginLogoutButton } from "../Button";
import { SavedNames } from "../Modal";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  const hideLoginLogoutButton = path === "/login" || path === "/signup";
  console.log(hideLoginLogoutButton);
  const { userProfile } = useUser();
  console.log(userProfile);
  return (
    <nav className=" w-full flex flex-col justify-end item-end">
      {!hideLoginLogoutButton && <LoginLogoutButton />}
      {userProfile?.savedNames && userProfile.savedNames.length > 0 && (
        <SavedNames />
      )}
    </nav>
  );
}
