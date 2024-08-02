"use client";
import { useClearProducerName, useProducerName } from "@/hooks";
import { ButtonOutline } from "./Button";

export const ClearProducerName = () => {
  const clearProducerName = useClearProducerName();

  return <ButtonOutline text="Clear" onClick={() => clearProducerName()} />;
};
