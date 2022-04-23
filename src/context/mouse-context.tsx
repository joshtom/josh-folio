import React, { createContext, useState } from "react";

type cursor = 'hovered' | 'unhovered' | ''
export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: (cursorType: cursor) => {},
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState("");

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
