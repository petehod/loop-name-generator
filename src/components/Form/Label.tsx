import { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  text: string;
};
export const Label = ({ text, ...props }: LabelProps) => {
  return (
    <label className="text-0.875 font-medium text-white" {...props}>
      {text}
    </label>
  );
};
