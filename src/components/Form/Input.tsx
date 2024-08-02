import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = HTMLInputElement & {
  width?: string;
};

export const Input = forwardRef<
  InputProps,
  InputHTMLAttributes<HTMLInputElement>
>(({ width, ...props }, ref) => {
  return (
    <input
      className={`h-12  rounded bg-white outline-none pl-4 text-dark placeholder-dark placeholder-opacity-50 border border-dark focus:border-primary focus:placeholder-opacity-75 focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${
        width ?? `w-80`
      }`}
      ref={ref}
      {...props}
    />
  );
});
