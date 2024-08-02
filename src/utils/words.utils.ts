import { words } from "@/data/words.data";

const splitWords = words.split(`\n`);
const randomIndex = Math.floor(Math.random() * splitWords.length);

export const randomWord = () => {
  return splitWords[randomIndex];
};
