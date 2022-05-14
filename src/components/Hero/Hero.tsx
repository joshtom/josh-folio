import { useEffect, useRef } from "react";
import {
  HeroContainer,
  HeroHeading,
  Main,
  MainBody,
  MainFooter,
  MainHead,
  Section1,
  Section2,
  Section3,
} from "./Hero.styles";
import Header from "../Header/Header";
import Image from "next/image";
import Scroller from "@src/assets/icons/Scroller";
import PlaceholderImage from "@assets/images/placeholder.png";
import ArrowIcon from "@assets/icons/Arrow";
import gsap from "gsap";
/* Change the icon once the user scrolls down */

interface Heroprops {
  timeline?: any;
}
function Hero({ timeline }: Heroprops) {
  const tl = gsap.timeline();
  const main = useRef(null);

  useEffect(() => {
    timeline.from(main.current, {
      delay: 5,
      duration: 1.8,
      ease: "power4.out",
      skewY: 7,
      y: 400,
      opacity: 1,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  return (
    <HeroContainer>
      <Header timeline={tl} />
      <Main ref={main}>
        <MainHead>
          <HeroHeading>Joshua Olajide</HeroHeading>
          <Scroller />
        </MainHead>
        <MainBody>
          <Section1>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              <Image
                src="/q_auto/v1651137778/DSC_1473x_2_gjeiku.webp"
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                loading="lazy"
                blurDataURL={PlaceholderImage}
              />
            </div>
          </Section1>
          <Section2>
            I’m a frontend developer that loves to create scalable, fast and
            mobile-first web applications.
          </Section2>
          <Section3>
            <p>
              Currently at <b>Flutterwave</b>, Open for freelance project and
              collaboration
            </p>
            <section>
              <span>CONTACT ME</span>
              <span>
                <ArrowIcon />
              </span>
            </section>
          </Section3>
        </MainBody>
        <MainFooter>Front-end Developer</MainFooter>
      </Main>
    </HeroContainer>
  );
}

export default Hero;
