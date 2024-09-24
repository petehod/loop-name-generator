import React from "react";

export default function MainContentFormWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="rounded-lg ">{children}</div>;
}
