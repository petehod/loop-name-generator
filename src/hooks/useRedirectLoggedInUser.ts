import { GENERATE_LINK } from "@/constants/links.constants";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRedirectLoggedInUser = () => {
  const router = useRouter();
  const { isLoggedIn } = useUser();

  return useEffect(() => {
    if (isLoggedIn) router.push(GENERATE_LINK);
  }, [isLoggedIn, router]);
};
