import { words } from "@/data/words.data";

const splitWords = words.split(`\n`);

export const randomWord = () => {
  const randomIndex = Math.floor(Math.random() * splitWords.length);
  return splitWords[randomIndex];
};
