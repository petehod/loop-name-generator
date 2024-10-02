"use client";
import { useRedirectLoggedInUser } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useRedirectLoggedInUser();
  useEffect(() => {
    router.push("/generate");
  }, [router]);
  return null;
}
