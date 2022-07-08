import { useRef, useState, useEffect, useContext } from "react";
import { MouseContext } from "@context/mouse-context";
import { cVar } from "@src/helpers";
import { Panels } from "@src/utils/data";
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
  const [selectedElement, setSelectedElement] = useState(0);
  const [choose, setChoose] = useState([]);
  const { cursorChangeHandler } = useContext(MouseContext);

  const handleActive = (data: any, index: number) => {
    if (data.id === index + 1) {
      setIsActive(!isActive);
      setSelectedElement(data.id);
    }
  };

  useEffect(() => {
    const accBodyHeight = document.querySelectorAll("#accBody");
    const arr = [];
    accBodyHeight.forEach((element) => {
      arr.push(element.scrollHeight);
    });
    setChoose(arr);
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
              lineHeight: "1.4",
              fontSize: "20px",
              fontFamily: `${cVar("dmSans")}`,
            }}
          >
            Over the last few years my area of expertise spans across these
            areas.
          </p>
        </Overflow>
        {Panels.map((data, index) => {
          return (
            <Accordion
              onClick={() => handleActive(data, index)}
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              className="accordion"
              key={data.id}
            >
              <AccordionHeader
                role="tab"
                aria-expanded={isActive && selectedElement === index + 1}
              >
                <span className="accordion-line"> </span>
                <p>{data.label}</p>
              </AccordionHeader>
              <AccordionBody
                data-height={choose[index]}
                id="accBody"
                aria-expanded={isActive && selectedElement === index + 1}
                style={{
                  height: `${
                    isActive && selectedElement === index + 1
                      ? choose[index]
                      : 0
                  }px`,
                }}
              >
                <p>{data.content}</p>
              </AccordionBody>
            </Accordion>
          );
        })}
      </AboutContainer>
    </div>
  );
}

export default About;
