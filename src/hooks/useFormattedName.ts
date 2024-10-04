import { useNameParams } from "@/context/NameParamsContext";
import { useUser } from "@/context/UserContext";
import { getDate } from "@/utils/date.utils";
import { useMemo } from "react";

export const useFormattedName = (word: string) => {
  const { userProfile } = useUser();
  const { includeDate, key, tempo } = useNameParams();

  return useMemo(() => {
    if (!userProfile) return "";
    const string = `${word} ${tempo ? `${tempo} bpm` : ""}  ${key} @${
      userProfile.username
    } ${includeDate ? getDate() : ""}`;
    return string.toLowerCase();
  }, [includeDate, key, tempo, userProfile, word]);
};
