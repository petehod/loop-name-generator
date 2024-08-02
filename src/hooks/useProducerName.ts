import { useState, useEffect } from "react";

export const useProducerName = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [producerName, setProducerName] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = window.localStorage.getItem("producerName");
      if (storedName) {
        setProducerName(JSON.parse(storedName));
      }
    }
  }, []);

  useEffect(() => {
    if (producerName && typeof window !== "undefined") {
      window.localStorage.setItem("producerName", JSON.stringify(producerName));
    }
  }, [producerName]);

  return [producerName, setProducerName];
};
