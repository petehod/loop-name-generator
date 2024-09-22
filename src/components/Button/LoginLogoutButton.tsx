type ButtonOutlineProps = {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  backgroundColor?: "primary" | "white" | "dark";
  textColor?: "primary" | "white" | "dark";
  onClick?: () => void;
};
import { useUser } from "@/context/UserContext";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const LoginLogoutButton = ({}: ButtonOutlineProps) => {
  const { isLoggedIn, signOut } = useUser();
  const router = useRouter();

  return (
    <Button
      className={`text-white `}
      onClick={
        isLoggedIn ? async () => await signOut() : () => router.push("/login")
      }
      text={isLoggedIn ? "Logout" : "Login"}
    />
  );
};
