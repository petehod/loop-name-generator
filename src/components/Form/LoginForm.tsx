"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { FirebaseError } from "firebase/app";
import { z } from "zod";
import { Button } from "../Button";
import {
  FormInputLabelWrapper,
  Input,
  Label,
  Form,
  FormMessage
} from "@/components/Form";
import { FirebaseService } from "@/services";
import { LoggingService } from "@/services/logging.service";
import { EMAIL_INPUT, PASSWORD_INPUT } from "@/constants";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();

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
        await LoggingService.logSuccess(`Successfully logged in user!`, {
          email: emailValidationResult.data
        });
        window.location.replace("/");
      } catch (error) {
        if (error instanceof FirebaseError) {
          await LoggingService.logError(error, {
            email: email
          });
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
            autoComplete="on"
            id="email"
            type="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            minLength={EMAIL_INPUT.minLength}
            maxLength={EMAIL_INPUT.maxLength}
          />
        }
        label={<Label htmlFor="email" text="Email" />}
      />

      <FormInputLabelWrapper
        input={
          <Input
            autoComplete="on"
            id="password"
            type="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            minLength={PASSWORD_INPUT.minLength}
            maxLength={PASSWORD_INPUT.maxLength}
          />
        }
        label={<Label htmlFor="password" text="Password" />}
      />

      {errorMessage && <FormMessage message={errorMessage} />}

      <Button type="submit" text="Login" style={{ marginBottom: "0.5rem" }} />
      <div className="flex items-center justify-start gap-1 my-2">
        <p className="text-white"> Don&apos;t have an account?</p>
        <Link
          href={`/signup`}
          className=" font-semibold text-primary  text-center md:text-left"
        >
          Sign up
        </Link>
      </div>
      <Link
        href={`/reset-password`}
        className="text-0.875 font-semibold text-primary my-4 mb-6 text-center md:text-left"
      >
        Forgot password?
      </Link>
    </Form>
  );
}
