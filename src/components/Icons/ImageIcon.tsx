import { Icon } from "./Icon";
import Image from "next/image";
// Used to render either an image or an icon
export const ImageIcon = ({
  icon,
  iconType
}: {
  icon: string;
  iconType: "image" | "icon";
}) => {
  return iconType === "image" ? (
    <Image
      height={24}
      width={24}
      src={icon}
      alt={`Icon image for ${icon}`}
      className="rounded-lg	"
    />
  ) : (
    <Icon icon={icon} />
  );
};
