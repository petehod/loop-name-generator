import { formatLoopName } from "@/utils/formatText.utils";
import { randomWord } from "@/utils/words.utils";
import { DateToggle } from "./DateToggle";
import { useState } from "react";
import { getDate } from "@/utils/date.utils";
import { CopyToClipboardIcon, SocialMediaIcon } from "./Icons";
import { COPY_ICON, DICE_ICON } from "@/constants/icon.constants";
import { copyToClipboard } from "@/utils/copyClipboard.utils";

export const NameGenerator = ({ name }: { name: string }) => {
  const [includeDate, setIncludeDate] = useState(false);
  const [word, setWord] = useState(randomWord());
  const date = getDate();
  const loopName = formatLoopName(name, word, "", "", includeDate ? date : "");
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative flex flex-col items-center justify-between max-w-24	 bg-white shadow-3xl pt-10 rounded-lg w-full md:w-96 relative">
        <h2 className="text-2.5 font-semibold mb-6 md:mb-4 text-primary">
          Quickie
        </h2>
        <p className="text-dark">{loopName}</p>
        <DateToggle includeDate={includeDate} setIncludeDate={setIncludeDate} />
        <SocialMediaIcon
          onClick={() => setWord(randomWord())}
          icon={DICE_ICON}
          className=" cursor-pointer"
        />
        <CopyToClipboardIcon loopName={loopName} />
        {/* <LoopFileName loopName={fullLoopName} /> */}
      </div>
    </div>
  );
};
