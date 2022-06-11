import { useEffect, useRef, useContext } from "react";
import { MouseContext } from "@context/mouse-context";
import Logo from "@src/assets/icons/Logo";
import { LogoArea } from "../Header/Header.styles";
import { LineText } from "../LineText/LineText";
import { gsap } from "gsap";
import {
  ContactContainer,
  Email,
  Socials,
  List,
  Heading,
  OverflowEmail,
} from "./Contact.styles";
import { Overflow } from "../About/About.styles";

function Contact() {
  const Cont = useRef(null);
  const header = useRef(null);
  const a1 = useRef(null);
  const a2 = useRef(null);
  const a3 = useRef(null);
  const a4 = useRef(null);
  const a5 = useRef(null);
  const logo = useRef(null);
  const email = useRef(null);
  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      [
        header.current,
        a1.current,
        a2.current,
        a3.current,
        a4.current,
        a5.current,
        logo.current,
        email.current,
      ],
      {
        duration: 1,
        y: 400,
        ease: "power2.out",
        skewY: 16,
        scale: 1,
        opacity: 0,
        stagger: {
          amount: 0.8,
        },
      }
    );
  }, []);

  return (
    <div ref={Cont} id="contact">
      <LineText>shoot your shot 🌍</LineText>
      <ContactContainer>
        <Overflow>
          <Heading ref={header} className="ANIMATE-TEXT">
            Let&apos;s Work On Something Cool Together
          </Heading>
        </Overflow>

        <OverflowEmail>
          <Email
            ref={email}
            onMouseEnter={() => cursorChangeHandler("contact")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a href="mailto:joshuaolarjide@gmail.com" rel="noreferrer">
              🌍 <p>joshuaolarjide@gmail.com </p>
            </a>
          </Email>
        </OverflowEmail>
        <Socials>
          <List
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a href="#" aria-label="resume" ref={a1} rel="noreferrer">
              RESUME
            </a>
          </List>
          <List
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a
              href="https://medium.com/@olajidejoshua4real"
              target="_blank"
              aria-label="medium"
              ref={a2}
              rel="noreferrer"
            >
              MEDIUM
            </a>
          </List>
          <List
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a
              href="https://twitter.com/olatojosh"
              target="_blank"
              aria-label="twitter"
              ref={a3}
              rel="noreferrer"
            >
              TWITTER
            </a>
          </List>
          <List
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a
              href="https://www.linkedin.com/in/joshtom/"
              target="_blank"
              aria-label="resume"
              ref={a4}
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </List>
          <List
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a
              href="https://github.com/joshtom"
              target="_blank"
              aria-label="resume"
              ref={a5}
              rel="noreferrer"
            >
              GITHUB
            </a>
          </List>
          <List>
            <a
              href="#home"
              data-scroll-to
              data-scroll-offset="-100"
              data-scroll-speed="-2"
              rel="noreferrer"
            >
              <LogoArea ref={logo}>
                <Logo />
              </LogoArea>
            </a>
          </List>
        </Socials>
      </ContactContainer>
    </div>
  );
}

export default Contact;
