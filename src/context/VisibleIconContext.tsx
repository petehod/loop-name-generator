"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface VisibleIconContextType {
  copyIconVisible: boolean;
  toggleVisibility: () => void;
}

const VisibleIconContext = createContext<VisibleIconContextType | undefined>(
  undefined
);

export const VisibleIconProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [copyIconVisible, setCopyIconVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setCopyIconVisible((prevState) => !prevState);
  };

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
