import { useEffect, useRef } from "react";
import { cVar } from "@src/helpers";
import { Heading } from "../Contact/Contact.styles";
import { LineText } from "../LineText/LineText";
import { AboutContainer, AboutParagraph, Overflow } from "./About.styles";
import { gsap } from "gsap";

interface Aboutprops {
  timeline?: any;
}

function About({ timeline }: Aboutprops) {
  const Cont = useRef(null);
  const header = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.from([header.current, p1.current, p2.current, p3.current], {
  //     duration: 1,
  //     y: 400,
  //     ease: "power4.out",
  //     skewY: 16,
  //     scale: 1,
  //     opacity: 0,
  //     stagger: {
  //       amount: 0.8,
  //     },
  //   });
  // }, []);

  // useEffect(() => {
  //   timeline.from(Cont.current, {
  //     ease: "bounce.out",
  //     opacity: 0,
  //     stagger: {
  //       amount: 0.3,
  //     },
  //   });
  // }, [timeline]);

  return (
    <div ref={Cont}>
      {/* <div> */}
      <LineText>So far so good ✌️</LineText>
      <AboutContainer>
        <Overflow>
          <Heading
            ref={header}
            style={{ color: `${cVar("pink")}`, marginBottom: "20px" }}
          >
            {" "}
            In the last few years...{" "}
          </Heading>
        </Overflow>
        <Overflow>
          <AboutParagraph ref={p1}>
            I&apos;ve built products that solve real-life problems ranging from
            Businesses to companies with focus on creating fast, and accessible
            user experiences using advanced web technologies. Not only these
            makes me standout, but paying attention to every detail from any
            DESIGN which makes me deliver clean, elegant and pixel-perfect
            solutions.
          </AboutParagraph>
        </Overflow>
        <Overflow>
          <AboutParagraph ref={p2}>
            I&apos;ve built products that solve real-life problems ranging from
            Businesses to companies with focus on creating fast, and accessible
            user experiences using advanced web technologies. Not only these
            makes me standout, but paying attention to every detail from any
            DESIGN which makes me deliver clean, elegant and pixel-perfect
            solutions.
          </AboutParagraph>
        </Overflow>
        <Overflow>
          <AboutParagraph ref={p3}>
            I&apos;ve built products that solve real-life problems ranging from
            Businesses to companies with focus on creating fast, and accessible
            user experiences using advanced web technologies. Not only these
            makes me standout, but paying attention to every detail from any
            DESIGN which makes me deliver clean, elegant and pixel-perfect
            solutions.
          </AboutParagraph>
        </Overflow>
      </AboutContainer>
    </div>
  );
}

export default About;
