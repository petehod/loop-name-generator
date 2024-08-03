import { Copyright } from "./Copyright";
import { MadeByDean } from "./MadeByDean";

export const Footer = () => {
  return (
    <footer className={`flex flex-col items-center`}>
      <MadeByDean />
      <Copyright />
    </footer>
  );
};
