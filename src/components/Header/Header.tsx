import Nav from "./Nav";
import { LogoWithText } from "@/components/Logo";

export function Header() {
  return (
    <header className={`w-full h-24 flex justify-center items-center z-50`}>
      <div
        className={`h-full flex items-center justify-between max-w-60  w-full `}
      >
        <LogoWithText />
        <Nav />
      </div>
    </header>
  );
}
