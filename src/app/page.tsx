"use client";

import { LogoutButton } from "@/components/Button";
import NoProducerYet from "@/components/NoProducerYet";
import WordIdeasWrapper from "@/components/WordIdeasWrapper";
import YesProducerName from "@/components/YesProducerName";
import { useUser } from "@/context/UserContext";
import { useProducerName } from "@/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const { isLoggedIn } = useUser();

  if (isLoggedIn) router.push("/generate");
  return <div className="flex flex-col gap-4">Hi</div>;
}
