import { useUser } from "@/context/UserContext";
import { WordIdea } from "./WordIdea";

export const SavedNames = () => {
  const { userProfile } = useUser();

  return (
    <div className="w-full max-w-20 rounded flex flex-col border-1 border-white max-h-20 ">
      <div className="bg-white rounded-t py-4">
        <h2 className="text-1.125 font-semibold text-center">Saved names</h2>
      </div>
      <div className="overflow-y-scroll scrollbar-hide">
        {userProfile &&
          userProfile.savedNames
            .sort((a, b) => a.localeCompare(b))
            .map((word) => {
              return (
                <WordIdea
                  rightIcon="delete"
                  key={word}
                  word={word}
                  backgroundColor="bg-transparent"
                />
              );
            })}
      </div>
    </div>
  );
};
