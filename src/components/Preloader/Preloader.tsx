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

  const completeAnimate = () => {
    timeline
      .to(trans.current, {
        duration: 0.8,
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
      onComplete: () => {
        // Add smooth scroll once everything is complete
        import("locomotive-scroll").then((locomotiveModule) => {
          let scroll = new locomotiveModule.default({
            el: document.querySelector("#main-container"),
            smooth: true,
            multiplier: 1,
            class: "is-reveal",
          });
        });
      },
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
      .from([htext1.current, fText1.current, fText2.current], {
        duration: 0.5,
        y: 400,
        ease: "power2.out",
        skewY: 15,
        stagger: {
          amount: 0.5,
          each: 0.1,
          from: "random",
          ease: "power3.out",
        },
      });
  };

  useEffect(() => {
    setRandomQuote(RandomQuote[Math.floor(Math.random() * RandomQuote.length)]);
    animate();
    let startCount = 0;
    let endCount = 100;
    // let duration = 5;
    let duration = 2;
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
        }, 700);
      },
    });
  }, []);
  return (
    <Wrapper ref={wrapper}>
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
            {/* <span>Joshua Olajide</span> */}
            <Image src={PreloaderImage} width="200" height="200" />
          </Wrap>
        </Header>
        <Footer>
          <RandomText ref={fText1}>{randomQuote}</RandomText>
          <Countdown ref={fText2}>
            <span>{countdown.toFixed()}</span>
          </Countdown>
        </Footer>
      </WrapperContainer>
    </Wrapper>
  );
};

export default Preloader;
