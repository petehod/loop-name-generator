"use client";
import { DEFAULT_TIMEOUT } from "@/constants/timeout.constants";
import { createContext, useContext, useState, useCallback } from "react";

type Toast = {
  id: number;
  message: string;
};

type ToastContextType = {
  toastMessages: Toast[];
  showToast: (message: string, timeout?: number) => void;
  removeToast: (id: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [toastMessages, setToastMessages] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, timeout: number = DEFAULT_TIMEOUT) => {
      const id = Date.now(); // Unique ID based on timestamp
      const newToast = { id, message };

      setToastMessages((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToastMessages((prev) => prev.filter((toast) => toast.id !== id));
      }, timeout);
    },
    []
  );

  const removeToast = useCallback((id: number) => {
    setToastMessages((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toastMessages, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
