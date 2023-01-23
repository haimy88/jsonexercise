import React, { useState, useContext, useEffect } from "react";

const DisplayContext = React.createContext();

export function useDisplayContext() {
  return useContext(DisplayContext);
}

export function DisplayContextProvider({ children }) {
  const [display, setDisplay] = useState([]);
  const [legendTitle, setLegendTitle] = useState([]);

  useEffect(() => console.log(display), [display]);

  return (
    <DisplayContext.Provider
      value={{ display, setDisplay, legendTitle, setLegendTitle }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
