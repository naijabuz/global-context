import { createContext, useState } from "react";

export const AppGlobalContext = createContext();

const AppGlobalProvider = ({ children }) => {
  const [info, setInfo] = useState({
    heading: "Global Context API",
    desc: "Share data across your entire application",
  });

  return (
    <AppGlobalContext.Provider value={{ info, setInfo }}>
      {children}
    </AppGlobalContext.Provider>
  );
};

export default AppGlobalProvider;
