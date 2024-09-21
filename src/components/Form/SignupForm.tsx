"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import { FormInputLabelWrapper, Label, Input, Form } from "@/components/Form";
import { z } from "zod";
import { FirebaseService } from "@/services";
import { getDefaultUser, User } from "@/schema";

// TODO: Optimize this for uniqueness, correct password params, etc
const SignupSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string()
});

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
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

    console.log(`Successfully created User!`);
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
          />
        }
      />

      <Button text="Sign up" type="submit" backgroundColor="dark" />
    </Form>
  );
};

export default SignupForm;
