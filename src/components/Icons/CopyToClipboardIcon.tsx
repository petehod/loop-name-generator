import { COPY_ICON } from "@/constants/icon.constants";
import { copyToClipboard } from "@/utils/copyClipboard.utils";
import { SocialMediaIcon } from "./SocialMediaIcon";
import { CheckIcon } from "./CheckIcon";
import { useVisibleIcon } from "@/hooks";

export const CopyToClipboardIcon = ({ loopName }: { loopName: string }) => {
  const [copyIconVisible, setCopyIconVisible] = useVisibleIcon();
  return copyIconVisible ? (
    <SocialMediaIcon
      iconColor="text-white"
      backgroundColor="bg-dark"
      icon={COPY_ICON}
      onClick={() => {
        copyToClipboard(loopName);
        setCopyIconVisible(!copyIconVisible);
      }}
    />
  ) : (
    <CheckIcon />
  );
};
