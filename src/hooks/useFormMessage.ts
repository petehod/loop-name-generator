import { useCallback, useState } from "react";

export const useFormMessage = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const resetMessages = useCallback(() => {
    setSuccessMessage("");
    setErrorMessage("");
  }, []);

  return {
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    resetMessages
  };
};
