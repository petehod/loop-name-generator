"use client";
import { ThemeForm } from "@/components/Form";
import MainContentTitle from "@/components/MainContentTitle";
import MainContentWrapper from "@/components/MainContentWrapper";
import { SavedNames } from "@/components/SavedNames";
import WordIdeasWrapper from "@/components/WordIdeasWrapper";
import { useUser } from "@/context/UserContext";
import { generateLoopNames } from "@/services";

import { useState } from "react";

export default function Generate() {
  const { isLoggedIn, userProfile } = useUser();
  const [wordIdeas, setWordIdeas] = useState<string[]>();
  const [enteredTheme, setEnteredTheme] = useState("");

  const handleGenerateWords = async (
    event: React.FormEvent<HTMLFormElement>,
    theme: string
  ) => {
    event.preventDefault();
    if (!theme) return;
    const response = await generateLoopNames(theme);

    const splitResponse = response.split(", ");
    setEnteredTheme(theme);
    setWordIdeas(splitResponse);
  };

  if (!isLoggedIn) return <div>loading...</div>;

  return (
    <div className="flex w-full justify-center items-start gap-12">
      <div className="flex  items-center flex-col gap-4">
        <MainContentWrapper>
          <MainContentTitle />

          <ThemeForm onSubmit={handleGenerateWords} />
        </MainContentWrapper>
        {enteredTheme && (
          <p className="text-white text-left w-full">
            Ideas for <span className="underline">{enteredTheme}</span>
          </p>
        )}
        {wordIdeas && <WordIdeasWrapper words={wordIdeas} />}
      </div>
      {userProfile && userProfile.savedNames.length > 0 && <SavedNames />}
    </div>
  );
}
