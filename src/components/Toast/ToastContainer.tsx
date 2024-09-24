"use client";
import { useToast } from "@/context/ToastContext";
import { Toast } from "./Toast";

export const ToastContainer = () => {
  const { toastMessages } = useToast();
  console.log(toastMessages);
  console.log(toastMessages);
  return (
    <div className="flex flex-col fixed bottom-12 mx-auto max-w-20 gap-2">
      {toastMessages.map((toast) => (
        <Toast key={toast.id} message={toast.message} />
      ))}
    </div>
  );
};
