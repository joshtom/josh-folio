import React, { Fragment, useContext, useEffect, useRef } from "react";
import useMousePosition from "@hooks/use-mouse-position";
import { cursorType, MouseContext } from "@context/mouse-context";
import { Dot, Ring } from "./DotRing.styles";
import gsap from "gsap";
import { cVar } from "@src/helpers";

const DotRing = () => {
  const ring = useRef(null);
  const dot = useRef(null);
  const section = useRef(null);
  const span = useRef(null);
  // 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
  const cursorDisplay = (cursor: cursorType | string) => {
    if (cursor === "ahover") return "GOTO";
    else if (cursor === "linkhover") return "VIEW";
    else if (cursor === "buttonhover") return "BUTTON";
    else if (cursor === "scrolldown") return "SCROLL DOWN";
    else if (cursor === "contact") return "SHOOT";
    return null;
  };
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  gsap.to(ring.current, {
    duration: 0.4,
    x: x,
    y: y,
  });
  gsap.to(dot.current, {
    duration: 0.1,
    x: x,
    y: y,
  });

  // Create a function, Listen to the cursor type, Then apply styling based on that.
  const cursorChangeOnHover = (cursor: cursorType | string) => {
    if (cursor === "hovered") {
      gsap.to(ring.current, {
        scale: 1.2,
      });
      gsap.to(dot.current, {
        opacity: 0,
      });
    } else if (cursor === "linkhover" || cursor === "contact") {
      gsap.to(ring.current, {
        scale: 2,
      });
      gsap.to(span.current, {
        scale: 0.6,
      });
      gsap.to(section.current, {
        background: `${cVar("light")}`,
      });
      gsap.to(dot.current, {
        opacity: 0,
      });
    } else {
      gsap.to(ring.current, {
        border: `1px solid ${cVar("light")}`,
        scale: 1,
      });
      gsap.to(section.current, {
        background: `transparent`,
      });
      gsap.to(dot.current, {
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    // Listen to cursor type changes and pass the param to the function
    cursorChangeOnHover(cursorType);
  }, [cursorType]);

  return (
    <Fragment>
      <Ring ref={ring}>
        <section ref={section}>
          <span ref={span}>{cursorDisplay(cursorType)}</span>
        </section>
      </Ring>
      <Dot ref={dot}></Dot>
    </Fragment>
  );
};

export default DotRing;
