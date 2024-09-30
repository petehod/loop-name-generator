"use client";
import { useRedirectLoggedInUser } from "@/hooks";

export default function Home() {
  useRedirectLoggedInUser();

  return <div className="flex flex-col gap-4">Hi</div>;
}
