"use client";
import { formatLoopName } from "@/utils/formatText.utils";
import { Icon } from "./Icons";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { copyToClipboard } from "@/utils/copyClipboard.utils";
import { motion } from "framer-motion";
import { animationVariants, SPRING } from "@/constants/animations.constants";
import {
  CHECK_ICON,
  COPY_ICON,
  SAVE_ICON,
  TRASH_ICON
} from "@/constants/icon.constants";
import { useToast } from "@/context/ToastContext";
import { SUCCESSFUL_COPY_MESSAGE } from "@/constants/messages.constants";
import { useUser } from "@/context/UserContext";
import { FirebaseService } from "@/services";

const AnimatedIcon = ({
  children,
  containerStyles,
  onClick
}: {
  children: React.ReactNode;
  containerStyles?: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className={`flex flex-row items-center justify-start ${containerStyles}`}
      variants={animationVariants}
      whileHover={"hover"}
      whileTap={"tap"}
      onClick={onClick}
      layout="position"
      transition={SPRING}
    >
      {children}
    </motion.div>
  );
};

export const WordIdea = memo(
  ({
    word,
    backgroundColor = "bg-dark",
    rightIcon
  }: {
    word: string;
    backgroundColor?: string;
    rightIcon: "save" | "delete";
  }) => {
    const { showToast } = useToast();
    const { userProfile } = useUser();
    const [saved, setSaved] = useState(false);
    const [copied, setCopied] = useState(false);
    const formattedName = useMemo(() => {
      return formatLoopName(userProfile?.username as string, word);
    }, [userProfile, word]);

    useEffect(() => {
      if (copied) {
        const timeout = setTimeout(() => {
          setCopied(false);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }, [copied]);

    const handleSaveIdea = useCallback(async () => {
      if (!userProfile) return;
      await FirebaseService.updateSavedNames(userProfile?.id, word);
      setSaved(true);
      showToast(`Successfully saved ${word}`);
    }, [showToast, userProfile, word]);

    const handleDeleteIdea = useCallback(async () => {
      if (!userProfile) return;
      await FirebaseService.removeSavedName(userProfile?.id, word);
      showToast(`Successfully removed ${word} from saved`);
    }, [showToast, userProfile, word]);

    if (saved) return null;
    return (
      <motion.div
        layout="position"
        className={`flex rounded-lg text-white items-center justify-center flex-row flex-nowrap cursor-pointer p-2 ${backgroundColor}`}
      >
        <AnimatedIcon
          containerStyles="w-full"
          onClick={() => {
            copyToClipboard(formattedName);
            showToast(SUCCESSFUL_COPY_MESSAGE(word));
            setCopied(true);
          }}
        >
          <Icon height={24} icon={!copied ? COPY_ICON : CHECK_ICON} />

          <motion.p layout={"position"} transition={SPRING} className="w-full">
            {formattedName}
          </motion.p>
        </AnimatedIcon>

        <AnimatedIcon
          onClick={rightIcon === "save" ? handleSaveIdea : handleDeleteIdea}
        >
          <Icon
            icon={rightIcon === "save" ? SAVE_ICON : TRASH_ICON}
            height={24}
            onClick={handleSaveIdea}
          />
        </AnimatedIcon>
      </motion.div>
    );
  }
);
