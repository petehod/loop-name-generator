import { FormMessage } from "./FormMessage";

export const FormMessagesWrapper = ({
  successMessage,
  errorMessage
}: {
  successMessage?: string;
  errorMessage?: string;
}) => {
  return (
    <>
      {successMessage && <FormMessage message={successMessage} />}
      {errorMessage && <FormMessage message={errorMessage} type="error" />}
    </>
  );
};
