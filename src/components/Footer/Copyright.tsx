import { getCurrentYear } from "@/utils/date.utils";

export const Copyright = () => {
  return (
    <p className={`text-1 text-white`}>© {getCurrentYear()} Meloroids LLC</p>
  );
};
