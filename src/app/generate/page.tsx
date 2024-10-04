"use client";
import { ThemeForm } from "@/components/Form";
import MainContentTitle from "@/components/MainContentTitle";
import MainContentWrapper from "@/components/MainContentWrapper";
import { SavedNames } from "@/components/SavedNames";
import withAuth from "@/components/WithAuth";
import WordIdeasWrapper from "@/components/WordIdeasWrapper";
import { SPRING } from "@/constants";
import { useUser } from "@/context/UserContext";
import { generateLoopNames } from "@/services";
import { motion } from "framer-motion";
import { useState } from "react";

function Generate() {
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

  const savedNamesExist = userProfile && userProfile.savedNames.length > 0;

  return (
    <motion.div
      layout={true}
      transition={SPRING}
      style={{ flex: savedNamesExist ? 1 : "" }}
      className="flex flex-col md:flex-row w-full justify-center items-start gap-12 h-full "
    >
      <motion.div
        transition={SPRING}
        layout="position"
        className="flex w-full md:max-w-20  items-center flex-col gap-4"
      >
        <MainContentWrapper>
          <MainContentTitle />

          <ThemeForm onSubmit={handleGenerateWords} />
        </MainContentWrapper>
        {enteredTheme && (
          <motion.p
            layout="position"
            transition={SPRING}
            className="text-white text-left w-full"
          >
            Ideas for <span className="underline">{enteredTheme}</span>
          </motion.p>
        )}
        {wordIdeas && <WordIdeasWrapper words={wordIdeas} />}
      </motion.div>
      {savedNamesExist && <SavedNames />}
    </motion.div>
  );
}

export default withAuth(Generate);
