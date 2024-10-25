import { useNameParams } from "@/context/NameParamsContext";
import { useUser } from "@/context/UserContext";
import { getDate } from "@/utils/date.utils";
import { useMemo } from "react";

export const useFormattedName = (word: string) => {
  const { userProfile } = useUser();
  const { includeDate, key, tempo } = useNameParams();
  const paramString = `${tempo ? `${tempo} bpm` : ""}  ${key ?? ""} `;

  return useMemo(() => {
    if (!userProfile) return "";
    const rawString = `${word} ${paramString} @${userProfile.username} ${
      includeDate ? getDate() : ""
    }`;

    const formattedString = rawString.replace(/\s+/g, " ").trim();

    return formattedString.toLowerCase();
  }, [includeDate, paramString, userProfile, word]);
};
