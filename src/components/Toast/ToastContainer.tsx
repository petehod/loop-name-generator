"use client";
import { useToast } from "@/context/ToastContext";
import { Toast } from "./Toast";

export const ToastContainer = () => {
  const { toastMessages } = useToast();
  console.log(toastMessages);

  return (
    <>
      {toastMessages.map((toast) => (
        <Toast key={toast.id} message={toast.message} />
      ))}
    </>
  );
};
