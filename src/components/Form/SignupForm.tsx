"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import { FormInputLabelWrapper, Label, Input, Form } from "@/components/Form";
import { z } from "zod";
import { FirebaseService } from "@/services";
import { getDefaultUser, SignupSchema, User } from "@/schema";
import { useRouter } from "next/navigation";
import { sendEmailVerification } from "firebase/auth";
import { motion } from "framer-motion";
import { animationVariants } from "@/constants/animations.constants";
import Link from "next/link";
import { LOGIN } from "@/constants/links.constants";
import { useFormMessage, useRedirectLoggedInUser } from "@/hooks";
import { FormMessagesWrapper } from "./FormMessagesWrapper";
import { LoggingService } from "@/services/logging.service";
import { EMAIL_INPUT, PASSWORD_INPUT, USERNAME_INPUT } from "@/constants";

const SignupForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { errorMessage, setErrorMessage, resetMessages } = useFormMessage();
  useRedirectLoggedInUser();
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const data = SignupSchema.parse({ email, password, username });

      const userData = await FirebaseService.createUser(
        data.email,
        data.password
      );

      const formattedData = getDefaultUser(
        userData.uid,
        userData.email ?? data.email,
        data.username
      );

      await FirebaseService.addUser(formattedData);
      await sendEmailVerification(userData);
      await LoggingService.logSuccess(`Successfully created user!`, {
        email: data.email
      });
      router.push("/generate");
    } catch (error) {
      if (error instanceof Error) {
        await LoggingService.logError(error, { email, username });
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <Form onSubmit={handleSignUp} title="Signup">
      <FormInputLabelWrapper
        label={<Label htmlFor="username" text="Username*" />}
        input={
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            minLength={USERNAME_INPUT.minLength}
            maxLength={USERNAME_INPUT.maxLength}
          />
        }
      />

      <FormInputLabelWrapper
        label={<Label htmlFor="email" text="Email Address*" />}
        input={
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            minLength={EMAIL_INPUT.minLength}
            maxLength={EMAIL_INPUT.maxLength}
          />
        }
      />

      <FormInputLabelWrapper
        label={<Label htmlFor="password" text="Password*" />}
        input={
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            minLength={PASSWORD_INPUT.minLength}
            maxLength={PASSWORD_INPUT.maxLength}
          />
        }
      />

      <motion.div
        variants={animationVariants}
        whileTap={"tap"}
        whileHover={"hover"}
        className="flex items-start justify-start w-full max-w-20 gap-1 mb-4"
      >
        <Input
          type="checkbox"
          id="terms"
          required
          className="h-8 w-8 border-gray-300 rounded focus:ring-indigo-500"
        />
        <Label
          text="By checking this box, you are agreeing to let dean contact you with cool stuff"
          htmlFor="terms"
          className="text-sm text-white "
        />
      </motion.div>

      <Button text="Sign up" type="submit" />
      <FormMessagesWrapper errorMessage={errorMessage} />
      <p className="text-white  mt-4">
        Already have an account?
        <Link href={LOGIN} className="font-semibold text-primary ml-1">
          Login
        </Link>
      </p>
    </Form>
  );
};

export default SignupForm;
