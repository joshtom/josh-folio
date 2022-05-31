import { useEffect, useRef } from "react";
import Logo from "@src/assets/icons/Logo";
import { LogoArea } from "../Header/Header.styles";
import { LineText } from "../LineText/LineText";
import {
  ContactContainer,
  Email,
  Socials,
  List,
  Heading,
} from "./Contact.styles";

interface Contactprops {
  timeline?: any;
}

function Contact({ timeline }: Contactprops) {
  const Cont = useRef(null);
  useEffect(() => {
    timeline.from(Cont.current, {
      // delay: 9,
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
      <LineText>Contact</LineText>
      <ContactContainer>
        <Heading>Let&apos;s Work On Something Cool Together</Heading>

        <Email>
          <a href="mailto:joshuaolarjide@gmail.com">
            🌍 <p>joshuaolarjide@gmail.com </p>
          </a>
        </Email>
        <Socials>
          <List>
            <a href="#" aria-label="resume">
              RESUME
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume">
              MEDIUM
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume">
              TWITTER
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume">
              LINKEDIN
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume">
              GITHUB
            </a>
          </List>
          <List>
            <LogoArea>
              <Logo />
            </LogoArea>
          </List>
        </Socials>
      </ContactContainer>
    </div>
  );
}

export default Contact;
