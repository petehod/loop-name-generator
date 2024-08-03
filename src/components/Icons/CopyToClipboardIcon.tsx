import { COPY_ICON } from "@/constants/icon.constants";
import { copyToClipboard } from "@/utils/copyClipboard.utils";
import { SocialMediaIcon } from "./SocialMediaIcon";
import { useState } from "react";
import { CheckIcon } from "./CheckIcon";

export const CopyToClipboardIcon = ({ loopName }: { loopName: string }) => {
  const [successfullyCopied, setSuccessfullyCopied] = useState(false);
  return (
    <div className="">
      {successfullyCopied ? (
        <CheckIcon />
      ) : (
        <SocialMediaIcon
          iconColor="text-white"
          backgroundColor="bg-dark"
          icon={COPY_ICON}
          onClick={() => {
            copyToClipboard(loopName);
            setSuccessfullyCopied(true);
          }}
        />
      )}
    </div>
  );
};
