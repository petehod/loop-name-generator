"use client";
import { LogoutButton } from "@/components/Button";
import NoProducerYet from "@/components/NoProducerYet";
import WordIdeasWrapper from "@/components/WordIdeasWrapper";
import YesProducerName from "@/components/YesProducerName";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Generate() {
  const router = useRouter();
  const { isLoggedIn, userProfile } = useUser();
  const [wordIdeas, setWordIdeas] = useState<string[]>();
  if (!isLoggedIn) router.push("/login");

  return (
    <div className="flex flex-col gap-4">
      {isLoggedIn && <LogoutButton />}

      <YesProducerName onSetWordIdeas={setWordIdeas} />

      {wordIdeas && <WordIdeasWrapper words={wordIdeas} />}
    </div>
  );
}
