import { formatLoopName } from "@/utils/formatText.utils";
import { CheckIcon, SocialMediaIcon } from "./Icons";
import { useProducerName } from "@/hooks";
import { memo, useEffect, useMemo, useState } from "react";
import { SingleCopyToClipboardIcon } from "./Icons/SingleCopyToClipboardIcon";
import { copyToClipboard } from "@/utils/copyClipboard.utils";
import { motion } from "framer-motion";
import { animationVariants } from "@/constants/animations.constants";
import { COPY_ICON } from "@/constants/icon.constants";
export const LoopNameIdea = memo(({ word }: { word: string }) => {
  const [producerName] = useProducerName();
  const [copied, setCopied] = useState(false);
  const formattedName = useMemo(() => {
    return formatLoopName(producerName, word);
  }, [producerName, word]);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  return (
    <motion.div
      className={`flex bg-dark rounded-lg text-white items-center justify-center flex-row flex-nowrap cursor-pointer p-2 gap-2`}
      onClick={() => {
        copyToClipboard(formattedName);
        setCopied(true);
      }}
      variants={animationVariants}
      whileTap={"tap"}
      whileHover={"hover"}
    >
      {!copied ? (
        <SocialMediaIcon
          iconColor="text-white"
          backgroundColor="bg-dark"
          icon={COPY_ICON}
        />
      ) : (
        <CheckIcon />
      )}
      <p className="w-full">{formattedName}</p>
    </motion.div>
  );
});
