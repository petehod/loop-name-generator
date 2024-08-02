import { useEffect, useMemo, useState } from "react";

export const useRandomWord = () => {
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    async function runEffect() {
      const res = await fetch("/api/randomWord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setRandomWord(data.result.content);
    }
    runEffect();
  }, []);

  return randomWord;
};
