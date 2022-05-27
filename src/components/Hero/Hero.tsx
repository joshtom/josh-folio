import { useEffect, useRef, useState } from "react";
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
import SplitTextToChars from "@src/SplitTextToChars/SplitTextToChars";

interface Heroprops {
  timeline?: any;
}
function Hero({ timeline }: Heroprops) {
  const HeroCont = useRef(null);
  const wavyTextRef = useRef(null);
  const wavyTextRef1 = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const scroller = useRef(null);

  // useEffect(() => {
  //   timeline.fromTo(
  //     HeroCont.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       // delay: 9,
  //       opacity: 1,
  //     }
  //   );
  // }, [timeline]);

  useEffect(() => {
    if (!wavyTextRef.current || !wavyTextRef1.current) return;
    const chars = SplitTextToChars(wavyTextRef.current);
    const chars1 = SplitTextToChars(wavyTextRef1.current);

    timeline.set(wavyTextRef.current, { perspective: 400 });
    timeline.set(wavyTextRef1.current, { perspective: 400 });

    timeline.from(
      [chars, chars1],
      {
        duration: 0.5,
        opacity: 0,
        scale: 1,
        y: 40,
        ease: "back",
        rotationX: -90,
        transformOrigin: "0% 50% -50",
        stagger: {
          amount: 0.6,
        },
      },
      "+=0"
    );
    timeline.from([section1.current, section2.current, section3.current], {
      // duration: 0.2,
      opacity: 0,
      scale: 1,
      ease: "back",
      y: 30,
      stagger: {
        amount: 0.6,
      },
    });
    timeline.from(scroller.current, {
      duration: 0.7,
      delay: 1,
      opacity: 0,
      scale: 1,
      rotation: -180,
      ease: "power4.out",
    });
  }, []);

  return (
    <HeroContainer ref={HeroCont}>
      <Header timeline={timeline} />
      {/* <Main ref={main}> */}
      <Main>
        <MainHead>
          <HeroHeading ref={wavyTextRef}> Joshua Olajide</HeroHeading>
          <ScrollerContainer ref={scroller}>
            <Scroller />
          </ScrollerContainer>
        </MainHead>
        <MainBody>
          <Section1 ref={section1}>
            <img
              src="https://res.cloudinary.com/drqltx8ye/image/upload/q_auto:best/v1652971643/fococlipping-20220224-05210_1_mydqw8.png"
              width="100%"
              height="100%"
            />
          </Section1>
          <MainBodyHeading>Frontend Developer</MainBodyHeading>
          <Section2 ref={section2}>
            I’m a frontend developer that loves to create scalable, fast and
            mobile-first web applications.
          </Section2>
          <Section3 ref={section3}>
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
        <MainFooter ref={wavyTextRef1}>Frontend Developer</MainFooter>
      </Main>
    </HeroContainer>
  );
}

export default Hero;
