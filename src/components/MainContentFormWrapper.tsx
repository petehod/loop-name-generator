import React from "react";

export default function MainContentFormWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-dark w-full max-w-26 p-4  rounded-lg ">{children}</div>
  );
}
