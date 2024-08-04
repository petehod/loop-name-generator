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

  return (
    <div className="w-full max-w-24  mt-4">
      <ButtonOutline
        text="Clear producer name"
        onClick={handleClearProducerName}
      />
    </div>
  );
};
