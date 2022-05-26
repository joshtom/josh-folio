import { Fragment, useEffect, useRef } from "react";
import { cVar } from "@src/helpers";
import { Heading } from "../Contact/Contact.styles";
import { LineText } from "../LineText/LineText";
import { AboutContainer, AboutParagraph } from "./About.styles";


interface Aboutprops {
  timeline?: any;
}

function About({ timeline }: Aboutprops) {
  const Cont = useRef(null);
  useEffect(() => {
    timeline.from(Cont.current, {
      delay: 9,
      duration: 6.0,
      // ease: "power4.out",
      ease: "bounce.out",
      // skewY: 7,
      // y: 400,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    });
  }, [timeline]);
  return (
    <div ref={Cont}>
      <LineText>About</LineText>
      <AboutContainer>
        <Heading style={{ color: `${cVar("pink")}`, marginBottom: "20px" }}>
          {" "}
          In the last few years...{" "}
        </Heading>
        <AboutParagraph>
          I&apos;ve built products that solve real-life problems ranging from
          Businesses to companies with focus on creating fast, and accessible
          user experiences using advanced web technologies. Not only these makes
          me standout, but paying attention to every detail from any DESIGN
          which makes me deliver clean, elegant and pixel-perfect solutions.
        </AboutParagraph>
        <AboutParagraph>
          I&apos;ve built products that solve real-life problems ranging from
          Businesses to companies with focus on creating fast, and accessible
          user experiences using advanced web technologies. Not only these makes
          me standout, but paying attention to every detail from any DESIGN
          which makes me deliver clean, elegant and pixel-perfect solutions.
        </AboutParagraph>
        <AboutParagraph>
          I&apos;ve built products that solve real-life problems ranging from
          Businesses to companies with focus on creating fast, and accessible
          user experiences using advanced web technologies. Not only these makes
          me standout, but paying attention to every detail from any DESIGN
          which makes me deliver clean, elegant and pixel-perfect solutions.
        </AboutParagraph>
      </AboutContainer>
    </div>
  );
}

export default About;
