import { formatLoopName } from "@/utils/formatText.utils";
import { randomWord } from "@/utils/words.utils";
import { DateToggle } from "./DateToggle";
import { useState } from "react";
import { getDate } from "@/utils/date.utils";
import { CopyToClipboardIcon, SocialMediaIcon } from "./Icons";
import { DICE_ICON } from "@/constants/icon.constants";
import { useVisibleIcon } from "@/hooks";

export const NameGenerator = ({ name }: { name: string }) => {
  const [includeDate, setIncludeDate] = useState(false);
  const [word, setWord] = useState(randomWord());
  const date = getDate();
  const loopName = formatLoopName(name, word, "", "", includeDate ? date : "");
  return (
    <div className="bg-white rounded-lg w-full max-w-24 md:w-96">
      <div className="flex flex-col items-center justify-center pb-4 text-center">
        <div className="w-full flex justify-end ">
          <SocialMediaIcon
            onClick={() => setWord(randomWord())}
            icon={DICE_ICON}
            className="right-2 cursor-pointer"
          />
        </div>
        <h2 className="text-2.5 font-semibold mb-4 text-primary">
          Loop Name Generator
        </h2>
        <DateToggle includeDate={includeDate} setIncludeDate={setIncludeDate} />
      </div>
      <div className="relative flex justify-between items-center bg-dark max-w-24 w-full text-white rounded-b-md py-2 px-4">
        <h3 className="text-1.125 max-w-24 w-full">{loopName}</h3>

        <CopyToClipboardIcon loopName={loopName} />
      </div>
    </div>
  );
};
