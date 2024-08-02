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
    console.log("uaua");
    event.preventDefault();
    onSetProducerName(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInputLabelWrapper
        input={
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            required
            type="text"
            minLength={1}
            maxLength={20}
            placeholder="_yayadean"
          />
        }
        label={<Label text="Please enter your producer name" htmlFor="name" />}
      />

      <Button text="Submit" type="submit" />
    </form>
  );
};
