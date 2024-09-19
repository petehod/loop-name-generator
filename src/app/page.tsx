"use client";

import NoProducerYet from "@/components/NoProducerYet";
import WordIdeasWrapper from "@/components/WordIdeasWrapper";
import YesProducerName from "@/components/YesProducerName";
import { useProducerName } from "@/hooks";
import { useState } from "react";

export default function Home() {
  const [producerName, _] = useProducerName();
  console.log("producerName", producerName);
  const [wordIdeas, setWordIdeas] = useState<string[]>();

  return (
    <div className="flex flex-col gap-4">
      {!producerName ? (
        <NoProducerYet />
      ) : (
        <>
          <YesProducerName onSetWordIdeas={setWordIdeas} />
        </>
      )}
      {wordIdeas && <WordIdeasWrapper words={wordIdeas} />}
    </div>
  );
}
