import { COPY_ICON } from "@/constants/icon.constants";
import { copyToClipboard } from "@/utils/copyClipboard.utils";
import { SocialMediaIcon } from "./SocialMediaIcon";
import { useState } from "react";
import { CheckIcon } from "./CheckIcon";

export const CopyToClipboardIcon = ({ loopName }: { loopName: string }) => {
  const [successfullyCopied, setSuccessfullyCopied] = useState(false);
  return successfullyCopied ? (
    <CheckIcon />
  ) : (
    <SocialMediaIcon
      icon={COPY_ICON}
      onClick={() => {
        copyToClipboard(loopName);
        setSuccessfullyCopied(true);
      }}
    />
  );
};
