import { useNameParams } from "@/context/NameParamsContext";
import { Button } from "../Button";
import { FormInputLabelWrapper } from "./FormInputLabelWrapper";
import { Input } from "./Input";
import { Label } from "./Label";
import { useState } from "react";

export const ThemeForm = ({
  onSubmit
}: {
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    theme: string
  ) => Promise<void>;
}) => {
  const { setTempo, setKey } = useNameParams();
  const [theme, setTheme] = useState("");
  return (
    <form
      className="relative w-full flex flex-col justify-center items-center  rounded-b-md "
      onSubmit={(e) => onSubmit(e, theme)}
    >
      <FormInputLabelWrapper
        marginBottom="mb-2"
        input={
          <Input
            required
            id="word"
            placeholder="ex: Pretty colors"
            style={{ width: "100%" }}
            onChange={(e) => setTheme(e.target.value)}
          />
        }
        label={
          <Label text="Enter a theme, word, phrase, etc." htmlFor="word" />
        }
      />
      <FormInputLabelWrapper
        marginBottom="mb-2"
        input={
          <Input
            id="key"
            placeholder="a minor"
            style={{ width: "100%" }}
            onChange={(e) => setKey(e.target.value)}
          />
        }
        label={<Label text="Key (optional)" htmlFor="key" />}
      />
      <FormInputLabelWrapper
        marginBottom="mb-2"
        input={
          <Input
            min={20}
            max={250}
            type="number"
            placeholder="123"
            style={{ width: "100%" }}
            onChange={(e) => setTempo(parseInt(e.target.value))}
          />
        }
        label={<Label text="Tempo (optional)" htmlFor="word" />}
      />

      <Button type="submit" text="Generate Words" />
    </form>
  );
};
