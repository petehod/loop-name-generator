"use client";
import { COPY_ICON } from "@/constants/icon.constants";
import { copyToClipboard } from "@/utils/copyClipboard.utils";
import { SocialMediaIcon } from "./SocialMediaIcon";
import { CheckIcon } from "./CheckIcon";
import { Toast } from "../Toast";
import { SUCCESSFUL_COPY_MESSAGE } from "@/constants/messages.constants";
import { useVisibleIcon } from "@/context/VisibleIconContext";

export const CopyToClipboardIcon = ({ loopName }: { loopName: string }) => {
  const { copyIconVisible, toggleVisibility } = useVisibleIcon();
  return (
    <>
      {copyIconVisible ? (
        <SocialMediaIcon
          iconColor="text-white"
          backgroundColor="bg-dark"
          icon={COPY_ICON}
          onClick={() => {
            copyToClipboard(loopName);
            toggleVisibility(false);
          }}
        />
      ) : (
        <>
          {<Toast message={SUCCESSFUL_COPY_MESSAGE} />}
          <CheckIcon />
        </>
      )}
    </>
  );
};
