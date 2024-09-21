import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export const useRedirectLoggedInUser = () => {
  const { isLoggedIn } = useUser();
  const router = useRouter();

  if (isLoggedIn) router.push("/generate");
};
