"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";

interface NameParamsContextType {
  includeDate: boolean;
  toggleDate: () => void;
  key: string | null;
  setKey: React.Dispatch<React.SetStateAction<string | null>>;
  tempo: number | null;
  setTempo: React.Dispatch<React.SetStateAction<number | null>>;
}

const NameParamsContext = createContext<NameParamsContextType | undefined>(
  undefined
);

export const NameParamsProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [includeDate, setIncludeDate] = useState<boolean>(true);
  const [key, setKey] = useState<string | null>(null);
  const [tempo, setTempo] = useState<number | null>(null);
  const toggleDate = useCallback(() => {
    setIncludeDate(!includeDate);
  }, [includeDate]);

  const value = useMemo(() => {
    return { includeDate, toggleDate, key, setKey, tempo, setTempo };
  }, [includeDate, key, tempo, toggleDate]);

  return (
    <NameParamsContext.Provider value={value}>
      {children}
    </NameParamsContext.Provider>
  );
};

export const useNameParams = (): NameParamsContextType => {
  const context = useContext(NameParamsContext);
  if (!context) {
    throw new Error("useToggleDate must be used within a DateProvider");
  }
  return context;
};
