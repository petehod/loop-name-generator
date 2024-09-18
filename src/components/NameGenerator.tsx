import { formatLoopName } from "@/utils/formatText.utils";
import { randomWord } from "@/utils/words.utils";
import { DateToggle } from "./DateToggle";
import { useEffect, useState } from "react";
import { getDate } from "@/utils/date.utils";
import { CopyToClipboardIcon, SocialMediaIcon } from "./Icons";
import { DICE_ICON } from "@/constants/icon.constants";
import { useVisibleIcon } from "@/context/VisibleIconContext";
import { generateLoopNames } from "@/services/openai.service";
import { FormInputLabelWrapper, Input, Label } from "./Form";
import { Button } from "./Button";
import { LoopNameIdea } from "./LoopNameIdea";

export const NameGenerator = ({ name }: { name: string }) => {
  const { toggleVisibility } = useVisibleIcon();
  const [theme, setTheme] = useState("");
  const [wordIdeas, setWordIdeas] = useState<string[]>();
  const handleGenerateWords = async () => {
    const response = await generateLoopNames(theme);

    const splitResponse = response.split(", ");
    setWordIdeas(splitResponse);
  };

  const [includeDate, setIncludeDate] = useState(false);
  const [word, setWord] = useState(randomWord());
  const date = getDate();
  const loopName = formatLoopName(name, word, "", "", includeDate ? date : "");
  return (
    <div className="bg-white rounded-lg w-full max-w-24 md:w-96">
      <div className="flex flex-col items-center justify-center pb-4 text-center">
        <div className="w-full flex justify-end ">
          <SocialMediaIcon
            onClick={() => {
              toggleVisibility(true);
              setWord(randomWord());
            }}
            icon={DICE_ICON}
            className="right-2 cursor-pointer"
          />
        </div>
        <h2 className="text-2.5 font-semibold mb-4 text-primary">
          Loop Name Generator
        </h2>
        <DateToggle includeDate={includeDate} setIncludeDate={setIncludeDate} />
      </div>
      <div className="relative flex justify-between items-center bg-dark max-w-24 w-full h-16 text-white rounded-b-md py-2 px-4">
        <h3 className="text-1.125 max-w-24 w-full">{loopName}</h3>

        <CopyToClipboardIcon loopName={loopName} />
      </div>

      <FormInputLabelWrapper
        input={<Input onChange={(e) => setTheme(e.target.value)} />}
        label={<Label text="Word" htmlFor="word" />}
      />
      <Button onClick={handleGenerateWords} text="Generate Words" />
      {wordIdeas &&
        wordIdeas.map((word) => <LoopNameIdea key={word} word={word} />)}
    </div>
  );
};
