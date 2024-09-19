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
      className="relative flex flex-col justify-center items-center bg-dark  text-white rounded-b-md p-4"
      onSubmit={(e) => onSubmit(e, theme)}
    >
      <FormInputLabelWrapper
        input={
          <Input
            placeholder="ex: Pretty colors"
            style={{ width: "100%" }}
            onChange={(e) => setTheme(e.target.value)}
          />
        }
        label={<Label text="Enter a theme" htmlFor="word" />}
      />
      <Button type="submit" text="Generate Words" />
    </form>
  );
};
