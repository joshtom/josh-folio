import { cVar } from "@src/helpers";
import { Heading } from "../Contact/Contact.styles";
import { LineText } from "../LineText/LineText";
import { AboutContainer, AboutParagraph } from "./About.styles";

function About() {
  return (
    <>
      <LineText>About</LineText>
      <AboutContainer>
        <Heading style={{ color: `${cVar("pink")}`, marginBottom: "20px" }}>
          {" "}
          In the last few years...{" "}
        </Heading>
        <AboutParagraph>
          I've built products that solve real-life problems ranging from
          Businesses to companies with focus on creating fast, and accessible
          user experiences using advanced web technologies. Not only these makes
          me standout, but paying attention to every detail from any DESIGN
          which makes me deliver clean, elegant and pixel-perfect solutions.
        </AboutParagraph>
        <AboutParagraph>
          I've built products that solve real-life problems ranging from
          Businesses to companies with focus on creating fast, and accessible
          user experiences using advanced web technologies. Not only these makes
          me standout, but paying attention to every detail from any DESIGN
          which makes me deliver clean, elegant and pixel-perfect solutions.
        </AboutParagraph>
        <AboutParagraph>
          I've built products that solve real-life problems ranging from
          Businesses to companies with focus on creating fast, and accessible
          user experiences using advanced web technologies. Not only these makes
          me standout, but paying attention to every detail from any DESIGN
          which makes me deliver clean, elegant and pixel-perfect solutions.
        </AboutParagraph>
      </AboutContainer>
    </>
  );
}

export default About;
