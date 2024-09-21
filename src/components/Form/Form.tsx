import { FormHTMLAttributes } from "react";

export const Form = ({
  children,
  title,
  ...props
}: FormHTMLAttributes<HTMLFormElement> & {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <form className="bg-dark px-4 pb-8 pt-4 rounded-lg" {...props}>
      {title && <h2 className="text-white text-2 mb-2">{title}</h2>}
      {children}
    </form>
  );
};
