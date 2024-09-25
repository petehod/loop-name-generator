"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const { isLoggedIn } = useUser();

  if (isLoggedIn) router.replace("/generate");

  return <div className="flex flex-col gap-4">Hi</div>;
}
