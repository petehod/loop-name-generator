import { DEFAULT_TIMEOUT } from "@/constants/timeout.constants";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useVisibleIcon = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] => {
  const [copyIconVisible, setCopyIconVisible] = useState(true);
  useEffect(() => {
    if (copyIconVisible) return;
    const timeout = setTimeout(() => {
      setCopyIconVisible(!copyIconVisible);
    }, DEFAULT_TIMEOUT);

    return () => clearTimeout(timeout);
  }, [copyIconVisible]);

  return [copyIconVisible, setCopyIconVisible];
};
