import React, { Fragment, useContext } from "react";
// import "./DotRing.css";
import useMousePosition from "@hooks/use-mouse-position";
import { cursorType, MouseContext } from "@context/mouse-context";
import { Dot, Ring } from "./DotRing.styles";

const DotRing = () => {
  const cursorDisplay = (cursor: cursorType | string) => {
    if (cursor === "ahover") return "Goto";
    else if (cursor === "linkhover") return "View";
    else if (cursor === "buttonhover") return "Button";
    return null;
  };
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <Fragment>
      <Ring
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      >
        {cursorDisplay(cursorType)}
      </Ring>
      <Dot
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"dot " + cursorType}
      ></Dot>
    </Fragment>
  );
};

export default DotRing;
