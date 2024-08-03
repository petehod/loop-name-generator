import { CHECK_ICON } from "@/constants/icon.constants";
import { SocialMediaIcon } from "./SocialMediaIcon";
import { useEffect, useState } from "react";
import { DEFAULT_TIMEOUT } from "@/constants/timeout.constants";
import { CopyToClipboardIcon } from "./CopyToClipboardIcon";

export const CheckIcon = () => {
  const [timedOut, setTimedOut] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimedOut(true);
    }, DEFAULT_TIMEOUT);
    return () => clearTimeout(timeout);
  }, []);
  if (timedOut) return <CopyToClipboardIcon loopName="" />;
  return <SocialMediaIcon icon={CHECK_ICON} />;
};
