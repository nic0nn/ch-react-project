import { createContext, useState } from "react";

import { Loading } from "../shared/Loading";

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
     <Loading state={loading} size={30}>
       { children }
     </Loading>
    </LoadingContext.Provider>
  );
};
