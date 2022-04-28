import { HeroContainer, HeroHeading, HeroParagraph } from "./Hero.styles";
import { useContext, useEffect, useRef } from "react";
import { MouseContext } from "@context/mouse-context";
import Header from "../Header/Header";
/* Change the icon once the user scrolls down */

interface Heroprops {
  timeline?: any;
}
function Hero({ timeline }: Heroprops) {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  const { cursorChangeHandler } = useContext(MouseContext);

  // useEffect(() => {
  //   timeline
  //     .from([text1.current, text2.current], {
  //       duration: 1.8,
  //       ease: "power4.out",
  //       skewY: 7,
  //       y: 400,
  //       opacity: 1,
  //       stagger: {
  //         amount: 0.3,
  //       },
  //     })
  //     .from(text3.current, {
  //       duration: 0.6,
  //       opacity: 0,
  //       delay: 0.2,
  //       x: -100,
  //       autoAlpha: 0,
  //     });
  // }, []);

  return (
    <HeroContainer>
      <Header />
      <HeroHeading>
        <p> Frontend Developer </p>
      </HeroHeading>
      {/* <HeroHeading>
        <p
          ref={text1}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          FRONTEND DEVELOPER
        </p>
      </HeroHeading>
      <HeroParagraph>
        <p ref={text2}>JOSHUA OLAJIDE</p>
      </HeroParagraph>
      <HeroParagraph>
        <p ref={text3}>JOSHUA OLAJIDE</p>
      </HeroParagraph> */}
    </HeroContainer>
  );
}

export default Hero;
