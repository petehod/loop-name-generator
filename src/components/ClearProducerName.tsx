"use client";
import { useClearProducerName } from "@/hooks";
import { ButtonOutline } from "./Button";
import { useCallback } from "react";

export const ClearProducerName = () => {
  const clearProducerName = useClearProducerName();

  const handleClearProducerName = useCallback(() => {
    clearProducerName();
    window.location.reload();
  }, [clearProducerName]);

  return <ButtonOutline text="Clear" onClick={handleClearProducerName} />;
};
