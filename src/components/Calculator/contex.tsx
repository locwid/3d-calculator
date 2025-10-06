import { createContext, type PropsWithChildren, useContext } from "react";
import type { CalculatorConfig } from "./config";

export const CalculatorContext = createContext<CalculatorConfig | null>(null);

export const CalculatorProvider: React.FC<
  PropsWithChildren<{ config: CalculatorConfig }>
> = ({ children, config }) => {
  return (
    <CalculatorContext.Provider value={config}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error(
      "useCalculatorContext must be used within a CalculatorProvider",
    );
  }
  return context;
};
