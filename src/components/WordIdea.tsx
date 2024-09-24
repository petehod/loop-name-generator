import { formatLoopName } from "@/utils/formatText.utils";
import { Icon } from "./Icons";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { copyToClipboard } from "@/utils/copyClipboard.utils";
import { motion } from "framer-motion";
import { animationVariants } from "@/constants/animations.constants";
import { CHECK_ICON, COPY_ICON, SAVE_ICON } from "@/constants/icon.constants";
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
    >
      {children}
    </motion.div>
  );
};

export const WordIdea = memo(
  ({
    word,
    backgroundColor = "bg-dark"
  }: {
    word: string;
    backgroundColor?: string;
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

    if (saved) return null;
    return (
      <div
        className={`flex rounded-lg text-white items-center justify-center flex-row flex-nowrap cursor-pointer p-2 ${backgroundColor}`}
      >
        <AnimatedIcon
          containerStyles="w-full"
          onClick={() => {
            copyToClipboard(formattedName);
            showToast(SUCCESSFUL_COPY_MESSAGE);
            setCopied(true);
          }}
        >
          <Icon height={24} icon={!copied ? COPY_ICON : CHECK_ICON} />

          <p className="w-full">{formattedName}</p>
        </AnimatedIcon>

        <AnimatedIcon onClick={handleSaveIdea}>
          <Icon icon={SAVE_ICON} height={24} onClick={handleSaveIdea} />
        </AnimatedIcon>
      </div>
    );
  }
);
