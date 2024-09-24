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
  const [theme, setTheme] = useState("");
  return (
    <form
      className="relative w-full flex flex-col justify-center items-center  rounded-b-md "
      onSubmit={(e) => onSubmit(e, theme)}
    >
      <FormInputLabelWrapper
        marginBottom="mb-2"
        containerStyles="items-center"
        input={
          <Input
            placeholder="ex: Pretty colors"
            style={{ width: "100%" }}
            onChange={(e) => setTheme(e.target.value)}
          />
        }
        label={
          <Label text="Enter a theme, word, phrase, etc." htmlFor="word" />
        }
      />
      <Button type="submit" text="Generate Words" />
    </form>
  );
};
