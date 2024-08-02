import { SOCIAL_MEDIA_ICONS } from "@/constants/icon.constants";
import { memo } from "react";
import { SocialMediaIcon } from "./SocialMediaIcon";
import Link from "next/link";

export const SocialMediaIcons = memo(() => {
  return (
    <div className={`flex w-full justify-center`}>
      {SOCIAL_MEDIA_ICONS.map((icon) => (
        <Link key={icon.link} href={icon.link}>
          <SocialMediaIcon icon={icon.icon} />
        </Link>
      ))}
    </div>
  );
});
