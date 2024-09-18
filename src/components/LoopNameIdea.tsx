import { formatLoopName } from "@/utils/formatText.utils";
import { BUTTON_STYLES } from "./Button";
import { CopyToClipboardIcon } from "./Icons";
import { useProducerName } from "@/hooks";
import { useMemo } from "react";
import { SingleCopyToClipboardIcon } from "./Icons/SingleCopyToClipboardIcon";
import { copyToClipboard } from "@/utils/copyClipboard.utils";

export const LoopNameIdea = ({ word }: { word: string }) => {
  const [producerName] = useProducerName();
  const formattedName = useMemo(() => {
    return formatLoopName(producerName, word);
  }, [producerName, word]);
  console.log(formattedName);
  return (
    <div
      className={`${BUTTON_STYLES} flex-row`}
      onClick={() => copyToClipboard(formattedName)}
    >
      <SingleCopyToClipboardIcon loopName={formattedName} />
      <p>{formattedName}</p>
    </div>
  );
};
