import React, { useState } from "react";
import MainContentFormWrapper from "./MainContentFormWrapper";
import MainContentWrapper from "./MainContentWrapper";
import { ProducerNameForm } from "./ProducerNameForm";
import { ThemeForm } from "./Form";
import { generateLoopNames } from "@/services/openai.service";
import MainContentTitle from "./MainContentTitle";

export default function YesProducerName({
  onSetWordIdeas
}: {
  onSetWordIdeas: (words: string[]) => void;
}) {
  const handleGenerateWords = async (
    event: React.FormEvent<HTMLFormElement>,
    theme: string
  ) => {
    event.preventDefault();
    if (!theme) return;
    const response = await generateLoopNames(theme);

    const splitResponse = response.split(", ");
    onSetWordIdeas(splitResponse);
  };

  return (
    <MainContentWrapper>
      <MainContentTitle />
      <MainContentFormWrapper>
        <ThemeForm onSubmit={handleGenerateWords} />
      </MainContentFormWrapper>
    </MainContentWrapper>
  );
}
