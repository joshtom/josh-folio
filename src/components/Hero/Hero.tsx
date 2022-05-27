import { useEffect, useRef } from "react";
import {
  HeroContainer,
  HeroHeading,
  Main,
  MainBody,
  MainBodyHeading,
  MainFooter,
  MainHead,
  Section1,
  Section2,
  Section3,
  ScrollerContainer,
} from "./Hero.styles";
import Header from "../Header/Header";
import Scroller from "@src/assets/icons/Scroller";
import ArrowIcon from "@assets/icons/Arrow";
/* Change the icon once the user scrolls down */

interface Heroprops {
  timeline?: any;
}
function Hero({ timeline }: Heroprops) {
  const HeroCont = useRef(null);

  useEffect(() => {
    timeline.fromTo(
      HeroCont.current,
      {
        opacity: 0,
      },
      {
        delay: 9,
        opacity: 1,
      }
    );
  }, [timeline]);

  return (
    <HeroContainer ref={HeroCont}>
      <Header timeline={timeline} />
      {/* <Main ref={main}> */}
      <Main>
        <MainHead>
          <HeroHeading>Joshua Olajide</HeroHeading>
          <ScrollerContainer>
            <Scroller />
          </ScrollerContainer>
        </MainHead>
        <MainBody>
          <Section1>
            <img
              src="https://res.cloudinary.com/drqltx8ye/image/upload/q_auto:best/v1652971643/fococlipping-20220224-05210_1_mydqw8.png"
              width="100%"
              height="100%"
            />
          </Section1>
          <MainBodyHeading>Frontend Developer</MainBodyHeading>
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
        <MainFooter>Frontend Developer</MainFooter>
      </Main>
    </HeroContainer>
  );
}

export default Hero;
