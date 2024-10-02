"use client";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function VerifyEmail() {
  const router = useRouter();
  const { emailVerified } = useUser();

  useEffect(() => {
    if (emailVerified) router.push("/generate");
  }, [emailVerified, router]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-white  max-w-20 text-center">
      <h2 className="text-white text-1.5 text-center ">
        Please verify your email to use the application!
      </h2>
      <h3>
        *If you successfully verified your email, try refreshing the page.
      </h3>
    </div>
  );
}
