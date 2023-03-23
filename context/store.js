import { createContext, useState } from "react";

export const appContext = createContext();

export const ContextProvider = ({ children }) => {
  const [myState, setMyState] = useState(20034);

  return (
    <appContext.Provider value={[myState, setMyState]}>
      {children}
    </appContext.Provider>
  );
};
