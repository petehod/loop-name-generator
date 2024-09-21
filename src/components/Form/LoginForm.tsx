"use client";
import Link from "next/link";
import React, { useCallback, useRef, useState } from "react";
import { FirebaseError } from "firebase/app";
import { z } from "zod";
import { Button } from "../Button";
import { FormInputLabelWrapper, Input, Label, Form } from "@/components/Form";
import { FirebaseService } from "@/services";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();

      // Validate email
      const emailValidationResult = z.string().email().safeParse(email);
      if (!emailValidationResult.success) {
        setErrorMessage(
          `Email Error: ${emailValidationResult.error.issues
            .map((issue) => issue.message)
            .join(", ")}`
        );
        return;
      }

      try {
        await FirebaseService.loginUser(emailValidationResult.data, password);

        window.location.replace("/");
      } catch (error) {
        if (error instanceof FirebaseError) {
          setErrorMessage(error.message);
        }
      }
    },
    [email, password]
  );

  return (
    <Form id="loginForm" onSubmit={handleFormSubmit} title="Login">
      <FormInputLabelWrapper
        input={
          <Input
            id="email"
            type="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            minLength={1}
            maxLength={20}
          />
        }
        label={<Label htmlFor="email" text="Email" />}
      />

      <FormInputLabelWrapper
        input={
          <Input
            id="password"
            type="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            maxLength={20}
          />
        }
        label={<Label htmlFor="password" text="Password" />}
      />

      {errorMessage && (
        <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
      )}
      <Link
        href={`/reset-password`}
        className="text-0.875 font-semibold text-primary mt-4 text-center md:text-left"
      >
        Forgot password?
      </Link>

      <Button type="submit" text="Login" backgroundColor="dark" />
    </Form>
  );
}
