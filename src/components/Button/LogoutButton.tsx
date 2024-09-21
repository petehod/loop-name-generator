type ButtonOutlineProps = {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  backgroundColor?: "primary" | "white" | "dark";
  textColor?: "primary" | "white" | "dark";
  onClick?: () => void;
};
import { useUser } from "@/context/UserContext";
import { Button } from "./Button";

export const LogoutButton = ({}: ButtonOutlineProps) => {
  const { signOut } = useUser();

  return (
    <div className="h-16 background-dark w-full absolute top-0 left-0 right-0 flex justify-end pr-12">
      <Button
        className={`text-white `}
        onClick={async () => await signOut()}
        text={"Logout"}
      />
    </div>
  );
};
