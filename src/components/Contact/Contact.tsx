import { useEffect, useRef } from "react";
import Logo from "@src/assets/icons/Logo";
import { LogoArea } from "../Header/Header.styles";
import { LineText } from "../LineText/LineText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ContactContainer,
  Email,
  Socials,
  List,
  Heading,
  OverflowEmail,
} from "./Contact.styles";
import { Overflow } from "../About/About.styles";

interface Contactprops {
  timeline?: any;
}

function Contact({ timeline }: Contactprops) {
  const Cont = useRef(null);
  const header = useRef(null);
  const a1 = useRef(null);
  const a2 = useRef(null);
  const a3 = useRef(null);
  const a4 = useRef(null);
  const a5 = useRef(null);
  const logo = useRef(null);
  const email = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: Cont.current,
        start: "top-=40px center+=100px",
        // end: "top-=40px",
        end: "bottom",
        // scrub: true,
        markers: true,
        toggleActions: "play none none none",
      },
    });

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
  // useEffect(() => {
  //   timeline.from(Cont.current, {
  //     // delay: 9,
  //     // ease: "power4.out",
  //     ease: "bounce.out",
  //     // skewY: 7,
  //     // y: 400,
  //     opacity: 0,
  //     stagger: {
  //       amount: 0.3,
  //     },
  //   });
  // }, [timeline]);
  return (
    <div ref={Cont}>
      <LineText>Contact</LineText>
      <ContactContainer>
        <Overflow>
          <Heading ref={header}>
            Let&apos;s Work On Something Cool Together
          </Heading>
        </Overflow>

        <OverflowEmail>
          <Email ref={email}>
            <a href="mailto:joshuaolarjide@gmail.com">
              🌍 <p>joshuaolarjide@gmail.com </p>
            </a>
          </Email>
        </OverflowEmail>
        <Socials>
          <List>
            <a href="#" aria-label="resume" ref={a1}>
              RESUME
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume" ref={a2}>
              MEDIUM
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume" ref={a3}>
              TWITTER
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume" ref={a4}>
              LINKEDIN
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume" ref={a5}>
              GITHUB
            </a>
          </List>
          <List>
            <LogoArea ref={logo}>
              <Logo />
            </LogoArea>
          </List>
        </Socials>
      </ContactContainer>
    </div>
  );
}

export default Contact;
