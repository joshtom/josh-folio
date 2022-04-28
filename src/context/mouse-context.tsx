import React, { createContext, useState } from "react";

export type cursorType =
  | "hovered"
  | "unhovered"
  | ""
  | "ahover"
  | "linkhover"
  | "buttonhover";
export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: (cursorType: cursorType) => {},
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState<cursorType>("");

  const cursorChangeHandler = (cursorType: any) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
