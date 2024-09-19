"use client";
import { useState } from "react";
import { FormInputLabelWrapper, Input, Label } from "./Form";
import { Button } from "./Button";

export const ProducerNameForm = ({
  onSetProducerName
}: {
  onSetProducerName: (input: string) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSetProducerName(inputValue);

    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <FormInputLabelWrapper
        input={
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            required
            type="text"
            minLength={1}
            maxLength={20}
            placeholder="_yayadean"
            width={"w-full"}
          />
        }
        label={<Label text="Please enter your producer name" htmlFor="name" />}
      />

      <Button text="Submit" type="submit" />
    </form>
  );
};
