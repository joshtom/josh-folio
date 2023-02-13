/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useContext } from "react";
import { MouseContext } from "@context/mouse-context";
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
import { AnimateBanner } from "../Project/Project.styles";
import { gsap } from "gsap/dist/gsap";
interface Heroprops {
  timeline?: any;
}
function Hero({ timeline }: Heroprops) {
  const { cursorChangeHandler } = useContext(MouseContext);
  let timeDelay = 8;
  const HeroCont = useRef(null);
  const wavyTextRef = useRef(null);
  const wavyTextRef1 = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const sectionLine1 = useRef(null);
  const sectionLine2 = useRef(null);
  const scroller = useRef(null);
  const animeBanner = useRef(null);
  const mobilewavy1 = useRef(null);
  const mobilewavy2 = useRef(null);
  const image = useRef(null);
  const theTimeline = gsap.timeline();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(scroller.current, {
      duration: 1,
      rotate: 360 * 5,
    });
  }, []);

  useEffect(() => {
    if (!wavyTextRef.current || !wavyTextRef1.current) return;
    const chars = SplitTextToChars(wavyTextRef.current);
    const chars1 = SplitTextToChars(wavyTextRef1.current);

    timeline.set(wavyTextRef.current, { perspective: 400 });
    timeline.set(wavyTextRef1.current, { perspective: 400 });

    timeline
      .fromTo(
        HeroCont.current,
        {
          duration: 1,
          opacity: 0,
        },
        {
          delay: timeDelay,
          opacity: 1,
        }
      )
      .from([mobilewavy1.current, mobilewavy2.current], {
        duration: 1.4,
        opacity: 0,
        y: 40,
        stagger: {
          amount: 0.9,
        },
      })
      .from(
        [chars, chars1],
        {
          delay: -2,
          duration: 1.4,
          opacity: 0,
          scale: 1,
          y: 40,
          ease: "back",
          rotationX: -90,
          transformOrigin: "0% 50% -50",
          stagger: {
            amount: 0.9,
          },
        },
        "+=0"
      );

    theTimeline
      .to(animeBanner.current, {
        delay: timeDelay + 1,
        duration: 1,
        x: "100%",
        opacity: 1,
      })
      .from(image.current, {
        scale: 1.4,
        duration: 1.4,
        delay: -1,
      })
      .from([sectionLine1.current, sectionLine2.current], {
        scaleX: 0,
        stagger: {
          amount: 0.1,
        },
      })
      .from([section2.current, section3.current, section4.current], {
        opacity: 0,
        scale: 1,
        y: 30,
        stagger: {
          amount: 0.1,
        },
      })
      .from(scroller.current, {
        duration: 0.7,
        opacity: 0,
        scale: 1,
        rotation: -180,
        ease: "power4.out",
      });
  }, [timeline]);

  return (
    <HeroContainer ref={HeroCont}>
      <Header timeline={timeline} />
      <Main>
        <MainHead>
          <HeroHeading ref={wavyTextRef} desktop={true}>
            Joshua Olajide
          </HeroHeading>
          <HeroHeading desktop={false} ref={mobilewavy1}>
            {" "}
            Joshua Olajide
          </HeroHeading>
          <ScrollerContainer ref={scroller}>
            <Scroller />
          </ScrollerContainer>
        </MainHead>
        <MainBody>
          <Section1 ref={section1}>
            <AnimateBanner ref={animeBanner} className="animatebanner" />
            <img
              ref={image}
              src="/images/josh2.png"
              width="100%"
              height="100%"
              alt="png"
            />
          </Section1>
          <MainBodyHeading ref={mobilewavy2}>
            {" "}
            Frontend Engineer
          </MainBodyHeading>
          <Section2>
            <span id="topLine" ref={sectionLine1}>
              {" "}
            </span>
            <p ref={section2}>
              I’m a frontend engineer that loves to create scalable, fast and
              mobile-first web applications
            </p>
          </Section2>
          <Section3>
            <span id="topLine" ref={sectionLine2}>
              {" "}
            </span>
            <p ref={section3}>
              I currently work at <b>ARM GROUPS</b>, open for Projects and /
              Collaboration
            </p>
            <a href="mailto:joshuaolarjide@gmail.com" ref={section4}>
              <section
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                <span>CONTACT ME</span>
                <span>
                  <ArrowIcon />
                </span>
              </section>
            </a>
          </Section3>
        </MainBody>
        <MainFooter ref={wavyTextRef1}>Front-end Engineer</MainFooter>
      </Main>
    </HeroContainer>
  );
}

export default Hero;
