"use client";
import { DEFAULT_TIMEOUT } from "@/constants/timeout.constants";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

interface VisibleIconContextType {
  copyIconVisible: boolean;
  toggleVisibility: (value: boolean) => void;
}

const VisibleIconContext = createContext<VisibleIconContextType | undefined>(
  undefined
);

export const VisibleIconProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [copyIconVisible, setCopyIconVisible] = useState<boolean>(true);

  const toggleVisibility = (value: boolean) => {
    setCopyIconVisible(value);
  };

  useEffect(() => {
    if (copyIconVisible) return;

    const timeout = setTimeout(() => {
      setCopyIconVisible(true);
    }, DEFAULT_TIMEOUT);

    return () => clearTimeout(timeout);
  }, [copyIconVisible]);
  return (
    <VisibleIconContext.Provider value={{ copyIconVisible, toggleVisibility }}>
      {children}
    </VisibleIconContext.Provider>
  );
};

export const useVisibleIcon = (): VisibleIconContextType => {
  const context = useContext(VisibleIconContext);
  if (!context) {
    throw new Error("useVisibleIcon must be used within a VisibleIconProvider");
  }
  return context;
};
