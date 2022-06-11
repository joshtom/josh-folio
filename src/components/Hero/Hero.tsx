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
  const scroller = useRef(null);
  const animeBanner = useRef(null);
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
          opacity: 0,
        },
        {
          delay: timeDelay,
          opacity: 1,
        }
      )
      .from(
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

    theTimeline
      .to(animeBanner.current, {
        delay: timeDelay + 1,
        duration: 1,
        x: "100%",
        ease: "power2.out",
      })
      .from(image.current, {
        scale: 1.2,
        duration: 1,
        delay: -1,
        ease: "power2.out",
      })
      .from([section2.current, section3.current], {
        opacity: 0,
        scale: 1,
        delay: -1,
        ease: "back",
        y: 30,
        stagger: {
          amount: 0.6,
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
    <HeroContainer ref={HeroCont} className="smooth-scroll">
      <Header timeline={timeline} />
      <Main>
        <MainHead>
          <HeroHeading ref={wavyTextRef} desktop={true}>
            Joshua Olajide
          </HeroHeading>
          <HeroHeading desktop={false}> Joshua Olajide</HeroHeading>
          <ScrollerContainer ref={scroller}>
            <Scroller />
          </ScrollerContainer>
        </MainHead>
        <MainBody>
          <Section1 ref={section1}>
            <AnimateBanner ref={animeBanner} />
            <img
              ref={image}
              src="https://res.cloudinary.com/drqltx8ye/image/upload/q_auto:best/v1652971643/fococlipping-20220224-05210_1_mydqw8.png"
              width="100%"
              height="100%"
            />
          </Section1>
          <MainBodyHeading> Frontend Engineer</MainBodyHeading>
          <Section2 ref={section2}>
            I’m a frontend engineer that loves to create scalable, fast and
            mobile-first web applications
          </Section2>
          <Section3 ref={section3}>
            <p>
              I currently work at <b>FLUTTERWAVE</b>, open for fulltime role and
              / collaboration
            </p>
            <a href="mailto:joshuaolarjide@gmail.com">
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
