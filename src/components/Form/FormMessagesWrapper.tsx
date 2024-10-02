import { FormMessage } from "./FormMessage";

export const FormMessagesWrapper = ({
  successMessage,
  errorMessage
}: {
  successMessage?: string;
  errorMessage?: string;
}) => {
  return (
    <div className="max-w-20">
      {successMessage && <FormMessage message={successMessage} />}
      {errorMessage && <FormMessage message={errorMessage} type="error" />}
    </div>
  );
};
