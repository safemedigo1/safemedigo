import { createContext, useState } from "react";

export let appContext = createContext();

export const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState();
  return (
    <appContext.Provider value={{ lang, setLang }}>
      {children}
    </appContext.Provider>
  );
};
