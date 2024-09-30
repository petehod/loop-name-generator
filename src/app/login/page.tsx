"use client";
import LoginForm from "@/components/Form/LoginForm";
import { useRedirectLoggedInUser } from "@/hooks";

export default function Login() {
  useRedirectLoggedInUser();
  return <LoginForm />;
}
