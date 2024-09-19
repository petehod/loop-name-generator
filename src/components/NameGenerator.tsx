import { DateToggle } from "./DateToggle";
import { useState } from "react";
import { generateLoopNames } from "@/services/openai.service";
import { LoopNameIdea } from "./LoopNameIdea";
import { OpenAiWordForm } from "./Form/OpenAiWordForm";
import { ClearProducerName } from "./ClearProducerName";

export const NameGenerator = ({ name }: { name: string }) => {
  const [wordIdeas, setWordIdeas] = useState<string[]>();
  const handleGenerateWords = async (
    event: React.FormEvent<HTMLFormElement>,
    theme: string
  ) => {
    event.preventDefault();
    if (!theme) return;
    const response = await generateLoopNames(theme);

    const splitResponse = response.split(", ");
    setWordIdeas(splitResponse);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-lg w-full max-w-24 md:w-96 h-full pt-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full flex justify-end "></div>
          <h2 className="text-2.5 font-semibold mb-4 text-primary">
            Loop Name Generator
          </h2>
        </div>

        <OpenAiWordForm onSubmit={handleGenerateWords} />
      </div>
      {wordIdeas && (
        <div>
          <div className="flex flex-col w-full gap-2">
            {wordIdeas.map((word) => (
              <LoopNameIdea key={word} word={word} />
            ))}
          </div>
        </div>
      )}
      <ClearProducerName />
    </div>
  );
};
