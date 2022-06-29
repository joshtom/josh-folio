import { useEffect, useRef, useState } from "react";
import { cVar, RandomQuote } from "@src/helpers";
import gsap, { Linear } from "gsap";
import {
  Header,
  Footer,
  Wrap,
  Wrapper,
  RandomText,
  Countdown,
  Trans,
  WrapperContainer,
} from "./Preloader.styles";
import Image from "next/image";
import PreloaderImage from "@assets/images/preloader.png";

interface PreloaderProps {
  timeline?: any;
}

const Preloader: React.FC<PreloaderProps> = ({ timeline }) => {
  const wtl = gsap.timeline();
  const htext1 = useRef(null);
  const fText1 = useRef(null);
  const fText2 = useRef(null);
  const wrapper = useRef(null);
  const trans = useRef(null);
  const wrappercontainer = useRef(null);
  const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
  const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
  const [randomQuote, setRandomQuote] = useState("");
  let [countdown, setCountdown] = useState(0);
  let interval = useRef(null);

  const completeAnimate = () => {
    timeline
      .to(trans.current, {
        duration: 0.9,
        attr: { d: start },
        ease: "Power2.easeIn",
      })
      .to(trans.current, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        ease: "Power5.easeOut",
        strokeWidth: "0",
      })
      .to(wrapper.current, {
        display: "none",
      });

    wtl.to(wrappercontainer.current, {
      opacity: 0,
      autoAlpha: 0,
      ease: "power2.easeOut",
    });
  };

  const animate = () => {
    timeline
      .to(trans.current, {
        duration: 0.8,
        attr: { d: start },
        ease: "Power2.easeIn",
      })
      .to(trans.current, {
        duration: 0.4,
        attr: { d: end },
        ease: "Power2.easeOut",
      })
      .fromTo(
        [htext1.current, fText1.current, fText2.current],
        {
          duration: 0.5,
          y: 400,
          skewY: 15,
          opacity: 0,
        },
        {
          y: 0,
          ease: "power2.out",
          skewY: 0,
          opacity: 1,
          stagger: {
            amount: 0.5,
            each: 0.1,
            ease: "power3.out",
          },
        }
      );
  };

  useEffect(() => {
    setRandomQuote(RandomQuote[Math.floor(Math.random() * RandomQuote.length)]);
    // interval.current = setInterval(() => {
    //   setRandomQuote(
    //     RandomQuote[Math.floor(Math.random() * RandomQuote.length)]
    //   );
    // }, 1000);
    animate();
    let startCount = 0;
    let endCount = 100;
    let duration = 5;
    let num = { var: startCount };
    timeline.to(num, duration, {
      var: endCount,
      onUpdate: () => {
        setCountdown(num.var);
      },
      ease: Linear.easeNone,
      onComplete: () => {
        setTimeout(() => {
          completeAnimate();
        }, 400);
      },
    });
    // return () => {
    //   clearInterval(interval.current);
    // };
  }, []);
  return (
    <Wrapper
      ref={wrapper}
      // data-scroll
      // data-scroll-sticky
      // data-scroll-target="#home"
    >
      <Trans
        className="transition"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className="path"
          stroke={cVar("pink")}
          strokeWidth="2px"
          dur="10s"
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          ref={trans}
        />
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath xlinkHref="#path" />
        </animateMotion>
      </Trans>
      <WrapperContainer ref={wrappercontainer}>
        <Header>
          <Wrap ref={htext1}>
            <Image src={PreloaderImage} width="150" height="150" />
          </Wrap>
        </Header>
        <Footer>
          <RandomText ref={fText1}>{randomQuote}</RandomText>
          <Countdown ref={fText2}>
            <span>{countdown.toFixed()}%</span>
          </Countdown>
        </Footer>
      </WrapperContainer>
    </Wrapper>
  );
};

export default Preloader;
