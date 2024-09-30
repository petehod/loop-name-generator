"use client";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase";
import { Button } from "@/components/Button";
import {
  Form,
  FormInputLabelWrapper,
  FormMessage,
  Input,
  Label
} from "@/components/Form";
import { useFormMessage } from "@/hooks";
import { FormMessagesWrapper } from "@/components/Form/FormMessagesWrapper";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const {
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    resetMessages
  } = useFormMessage();
  const handleResetPassword = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("Email successfully sent!");
    } catch (e) {
      setErrorMessage("There was a problem sending an email. Please try again");
      console.error(e);
    }
  };
  return (
    <Form
      id="resetEmail"
      title="Reset Password"
      onSubmit={(e) => handleResetPassword(e)}
    >
      <FormInputLabelWrapper
        label={<Label text="Enter your email" htmlFor="email" />}
        input={
          <Input
            type="email"
            id="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
              resetMessages();
            }}
          />
        }
      />

      <Button text="Send link" type="submit" />
      <FormMessagesWrapper
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
    </Form>
  );
}
