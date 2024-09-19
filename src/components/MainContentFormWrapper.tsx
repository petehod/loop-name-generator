import React from "react";

export default function MainContentFormWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-dark w-full max-w-26   rounded-lg rounded-t-none">
      {children}
    </div>
  );
}
