"use client";
import { useUser } from "@/context/UserContext";
import { WordIdea } from "./WordIdea";
import { motion } from "framer-motion";
import { SPRING } from "@/constants";
export const SavedNames = () => {
  const { userProfile } = useUser();

  return (
    <motion.div
      layout={true}
      transition={SPRING}
      className="w-full md:max-w-20 rounded flex flex-col border-1 border-white  h-full max-h-4/5"
    >
      <motion.div
        transition={SPRING}
        layout={"position"}
        className="bg-white rounded-t py-4"
      >
        <h2 className="text-1.125 font-semibold text-center">Saved names</h2>
      </motion.div>
      <motion.div
        transition={SPRING}
        layout={true}
        className="overflow-y-scroll scrollbar-hide h-full"
      >
        {userProfile &&
          userProfile.savedNames
            .sort((a, b) => a.localeCompare(b))
            .map((word, index) => {
              return (
                <WordIdea
                  rightIcon="delete"
                  key={word}
                  word={word}
                  backgroundColor="bg-transparent"
                  styles={
                    index === userProfile.savedNames.length - 1
                      ? ""
                      : `border-1 items-start rounded-none`
                  }
                />
              );
            })}
      </motion.div>
    </motion.div>
  );
};
