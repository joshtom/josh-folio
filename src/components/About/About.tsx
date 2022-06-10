import { useRef } from "react";
import { cVar } from "@src/helpers";
import { Heading } from "../Contact/Contact.styles";
import { LineText } from "../LineText/LineText";
import { AboutContainer, AboutParagraph, Overflow } from "./About.styles";

function About() {
  const Cont = useRef(null);
  const header = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);

  return (
    <div ref={Cont} id="about">
      <LineText>So far so good ✌️</LineText>
      <AboutContainer>
        <Overflow>
          <Heading
            ref={header}
            style={{ color: `${cVar("pink")}`, marginBottom: "20px" }}
          >
            Over the last few years
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
