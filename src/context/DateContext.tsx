"use client";
import { DEFAULT_TIMEOUT } from "@/constants/timeout.constants";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

interface DateContextType {
  includeDate: boolean;
  toggleDate: () => void;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const DateProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [includeDate, setIncludeDate] = useState<boolean>(true);

  const toggleDate = useCallback(() => {
    setIncludeDate(!includeDate);
  }, [includeDate]);

  const value = useMemo(() => {
    return { includeDate, toggleDate };
  }, [includeDate, toggleDate]);

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export const useToggleDate = (): DateContextType => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useToggleDate must be used within a DateProvider");
  }
  return context;
};
