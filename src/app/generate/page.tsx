"use client";
import { SavedNames } from "@/components/SavedNames";
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
    <div className="flex w-full justify-center items-start gap-12">
      <div className="flex  items-center flex-col gap-4">
        <YesProducerName onSetWordIdeas={setWordIdeas} />
        {wordIdeas && <WordIdeasWrapper words={wordIdeas} />}
      </div>
      <SavedNames />
    </div>
  );
}
