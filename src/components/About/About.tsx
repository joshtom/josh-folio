import { cVar } from "@src/helpers";
import { Panels } from "@src/utils/data";
import { useRef, useState, useEffect } from "react";
import { LineText } from "../LineText/LineText";
import {
  AboutContainer,
  Overflow,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "./About.styles";

function About() {
  const Cont = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [height, setheight] = useState(0);
  const [selectedElement, setSelectedElement] = useState(0);

  const handleActive = (data: any, index: number) => {
    if (data.id === index + 1) {
      setIsActive(!isActive);
      setSelectedElement(data.id);
    }
  };

  useEffect(() => {
    const accBodyHeight = document.querySelector("#accBody")?.scrollHeight;
    setheight(accBodyHeight);
  }, []);

  return (
    <div ref={Cont} id="about">
      <LineText>About 😎</LineText>
      <AboutContainer>
        <Overflow>
          <p
            style={{
              color: `${cVar("pink")}`,
              marginBottom: "20px",
              lineHeight: "1.7",
            }}
          >
            Over the last few years my area of expertise spans across this areas
          </p>
        </Overflow>
        {Panels.map((data, index) => (
          <Accordion
            onClick={() => handleActive(data, index)}
            className="accordion"
            key={data.id}
          >
            <AccordionHeader
              role="tab"
              aria-expanded={isActive && selectedElement === index + 1}
            >
              <p>{data.label}</p>
            </AccordionHeader>
            <AccordionBody
              id="accBody"
              aria-expanded={isActive && selectedElement === index + 1}
              style={{
                height: `${
                  isActive && selectedElement === index + 1 ? height : 0
                }px`,
              }}
            >
              {data.content}
            </AccordionBody>
          </Accordion>
        ))}
      </AboutContainer>
    </div>
  );
}

export default About;
