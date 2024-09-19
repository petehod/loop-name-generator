import React from "react";
import { WordIdea } from "./WordIdea";

export default function WordIdeasWrapper({ words }: { words: string[] }) {
  return (
    <div className="flex flex-col w-full gap-2">
      {words.map((word) => (
        <WordIdea key={word} word={word} />
      ))}
    </div>
  );
}
