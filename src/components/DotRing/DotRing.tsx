import React, { Fragment, useContext } from "react";
// import "./DotRing.css";
import useMousePosition from "@hooks/use-mouse-position";
import { MouseContext } from "@context/mouse-context";
import { Dot, Ring } from "./DotRing.styles";

const DotRing = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <Fragment>
      <Ring
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      >
        {cursorType === "hovered" ? "Scroll" : null}
      </Ring>
      <Dot
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"dot " + cursorType}
      ></Dot>
    </Fragment>
  );
};

export default DotRing;
