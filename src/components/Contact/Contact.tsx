import { useEffect, useRef, useContext, useCallback } from "react";
import { MouseContext } from "@context/mouse-context";
import { LineText } from "../LineText/LineText";
import { gsap } from "gsap";
import {
  ContactContainer,
  Email,
  Socials,
  Heading,
  OverflowEmail,
  ScrollUp,
} from "./Contact.styles";
import { Overflow } from "../About/About.styles";
import ArrowIcon, { Smallarrow } from "@assets/icons/Arrow";
import { Links } from "../Header/Header.styles";

function Contact() {
  const Cont = useRef(null);
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div ref={Cont} id="contact">
      <LineText>shoot your shot 🚀</LineText>
      <ContactContainer>
        <Overflow data-scroll>
          <Heading data-scroll data-scroll-offset="200">
            Let&apos;s Work On Something Cool Together
          </Heading>
        </Overflow>

        <OverflowEmail data-scroll>
          <a
            href="mailto:joshuaolarjide@gmail.com"
            rel="noreferrer"
            onMouseEnter={() => cursorChangeHandler("contact")}
            onMouseLeave={() => cursorChangeHandler("")}
            data-scroll
            data-scroll-offset="200"
          >
            <Email>
              🌍 <p>joshuaolarjide@gmail.com </p>
            </Email>
          </a>
        </OverflowEmail>
        <Socials data-scroll data-scroll-delay="0.6">
          <Links
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a href="#" aria-label="resume" rel="noreferrer" className="link">
              <span className="h-link">
                <span className="h-link__inner">
                  <span> RESUME </span>
                  <span className="h-link__animated"> RESUME </span>
                </span>
              </span>
            </a>
          </Links>
          <Links
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a
              href="https://medium.com/@olajidejoshua4real"
              target="_blank"
              aria-label="medium"
              rel="noreferrer"
              className="link"
            >
              <span className="h-link">
                <span className="h-link__inner">
                  <span> MEDIUM </span>
                  <span className="h-link__animated"> MEDIUM </span>
                </span>
              </span>
            </a>
          </Links>
          <Links
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a
              href="https://twitter.com/olatojosh"
              target="_blank"
              aria-label="twitter"
              rel="noreferrer"
              className="link"
            >
              <span className="h-link">
                <span className="h-link__inner">
                  <span> TWITTER </span>
                  <span className="h-link__animated"> TWITTER </span>
                </span>
              </span>
            </a>
          </Links>
          <Links
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a
              href="https://www.linkedin.com/in/joshtom/"
              target="_blank"
              aria-label="resume"
              rel="noreferrer"
              className="link"
            >
              <span className="h-link">
                <span className="h-link__inner">
                  <span> LINKEDIN </span>
                  <span className="h-link__animated"> LINKEDIN </span>
                </span>
              </span>
            </a>
          </Links>
          <Links
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a
              href="https://github.com/joshtom"
              target="_blank"
              aria-label="resume"
              rel="noreferrer"
              className="link"
            >
              <span className="h-link">
                <span className="h-link__inner">
                  <span> GITHUB </span>
                  <span className="h-link__animated"> GITHUB </span>
                </span>
              </span>
            </a>
          </Links>
        </Socials>
        <a href="#home" data-scroll-to>
          <ScrollUp>
            <span className="c-link">
              <span className="c-link__inner">
                <span>
                  <Smallarrow />
                </span>
                <span className="c-link__animated">
                  <Smallarrow />
                </span>
              </span>
            </span>
          </ScrollUp>
        </a>
      </ContactContainer>
    </div>
  );
}

export default Contact;
