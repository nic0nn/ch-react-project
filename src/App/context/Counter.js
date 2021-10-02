import { createContext } from "react";

import { useCounter } from "../hooks";

export const CounterContext = createContext({});

export const CounterContextProvider = ({ children, value }) => {
  const [counter, add, remove ] = useCounter(value);
  return (
    <CounterContext.Provider value={{ counter, add, remove }}>
      {children}
    </CounterContext.Provider>
  );
};
