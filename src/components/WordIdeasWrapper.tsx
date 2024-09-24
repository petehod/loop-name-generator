import React from "react";
import { WordIdea } from "./WordIdea";
import { useUser } from "@/context/UserContext";

export default function WordIdeasWrapper({ words }: { words: string[] }) {
  return (
    <div className="flex flex-col w-full max-w-20 gap-2">
      {words
        .sort((a, b) => a.localeCompare(b))
        .map((word) => {
          return <WordIdea rightIcon="save" key={word} word={word} />;
        })}
    </div>
  );
}
