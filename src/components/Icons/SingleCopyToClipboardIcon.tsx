"use client";
import { COPY_ICON } from "@/constants/icon.constants";
import { copyToClipboard } from "@/utils/copyClipboard.utils";
import { SocialMediaIcon } from "./Icon";
import { CheckIcon } from "./CheckIcon";
import { Toast } from "../Toast";
import { SUCCESSFUL_COPY_MESSAGE } from "@/constants/messages.constants";
import { useVisibleIcon } from "@/context/VisibleIconContext";
import { memo, useEffect, useState } from "react";

export const SingleCopyToClipboardIcon = memo(
  ({ loopName }: { loopName: string }) => {
    const [copyIconVisible, toggleVisibility] = useState(true);

    useEffect(() => {
      if (!copyIconVisible) {
        const timeout = setTimeout(() => {
          toggleVisibility(true);
        }, 3000);

        return () => clearTimeout(timeout);
      }
    }, [copyIconVisible]);
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
  }
);
