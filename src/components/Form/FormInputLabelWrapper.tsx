import React from "react";

export const FormInputLabelWrapper = ({
  label,
  input,
  marginBottom = "mb-4"
}: {
  label: React.ReactNode;
  input: React.ReactNode;
  marginBottom?: string;
}) => {
  return (
    <div className={`flex flex-col items-start gap-0.5 ${marginBottom} w-full`}>
      {label}
      {input}
    </div>
  );
};
