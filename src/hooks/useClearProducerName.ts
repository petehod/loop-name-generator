import React from "react";
import { useProducerName } from "@/hooks";

export const useClearProducerName = () => {
  const [producerName, setProducerName] = useProducerName();
  console.log("fartr", producerName);
  const handleClear = () => {
    setProducerName("");
    window.localStorage.removeItem("producerName"); // Clear from localStorage
  };

  return handleClear;
};
