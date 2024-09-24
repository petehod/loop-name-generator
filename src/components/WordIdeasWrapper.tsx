import React from "react";
import { WordIdea } from "./WordIdea";
import { useUser } from "@/context/UserContext";

export default function WordIdeasWrapper({ words }: { words: string[] }) {
  const { userProfile } = useUser();
  const savedNames = userProfile?.savedNames;

  return (
    <div className="flex flex-col w-full gap-2">
      {words.map((word) => {
        const exists = savedNames?.find((n) => n === word);
        if (exists) return null;
        return <WordIdea key={word} word={word} />;
      })}
    </div>
  );
}
