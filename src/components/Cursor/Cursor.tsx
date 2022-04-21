import { cVar } from "@src/helpers";
import { Fragment, useEffect, useRef } from "react";
import styled from "styled-components";

const PointerStyle = styled.div`
  position: fixed;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  mix-blend-mode: difference;
  pointer-events: none;
`;

export const PointerSmall = styled(PointerStyle)`
  background: ${cVar("white")};
`;

const PointerBig = styled(PointerStyle)`
  border: 1px solid ${cVar("white")};
  background: ${cVar("white")};
  width: 60px;
  height: 60px;
  transition: width 400ms ease, height 400ms ease;
`;

function Cursor() {
  const pointerSmall = useRef(null);
  const pointerBig = useRef(null);

  const mouseOverEvent = (event: MouseEvent) => {
    pointerSmall.current.setAttribute(
      "style",
      "left: " + event.clientX + "px; top: " + event.clientY + "px;"
    );

    setTimeout(() => {
      pointerBig.current.setAttribute(
        "style",
        "left: " + event.clientX + "px; top: " + event.clientY + "px;"
      );
    }, 100);
  };

  const activeCursor = () => {
    pointerBig.current.setAttribute(
      "style",
      "width: " + 72 + "px; height: " + 72 + "px;"
    );
  };
  const inactiveCursor = () => {
    pointerBig.current.setAttribute(
      "style",
      "width: " + 22 + "px; height: " + 22 + "px;"
    );
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      document.addEventListener("mousemove", mouseOverEvent);
    }
    return () => {
      document.removeEventListener("mousemove", mouseOverEvent);
    };
  }, []);
  return (
    <Fragment>
      <PointerSmall ref={pointerSmall}></PointerSmall>
      <PointerBig ref={pointerBig}></PointerBig>
    </Fragment>
  );
}

export default Cursor;
