import React from "react";

export const FormInputLabelWrapper = ({
  label,
  input,
  marginBottom = "mb-4",
  containerStyles
}: {
  label: React.ReactNode;
  input: React.ReactNode;
  marginBottom?: string;
  containerStyles?: string;
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-0.5 ${marginBottom} w-full ${containerStyles}`}
    >
      {label}
      {input}
    </div>
  );
};
