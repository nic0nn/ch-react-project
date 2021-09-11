import { createContext } from "react";
import { useCounter } from "../hooks";

export const CounterContext = createContext({});

export const CounterContextProvider = ({ children }) => {
  const [counter, add, remove] = useCounter(0);

  return (
    <CounterContext.Provider value={{ counter, add, remove }}>
      {children}
    </CounterContext.Provider>
  );
};
