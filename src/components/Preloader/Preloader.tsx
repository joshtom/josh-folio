import { Ref, RefObject, useEffect, useRef, useState } from "react";
import { cVar, RandomQuote } from "@src/helpers";
import gsap, { Linear, TweenMax } from "gsap";
import {
  Header,
  Footer,
  Text,
  Wrapper,
  RandomText,
  Countdown,
  Trans,
  WrapperContainer,
} from "./Preloader.styles";
import ConditionallyRender from "../ConditionalRender/ConditionalRender";

interface PreloaderProps {
  timeline?: any;
}

const Preloader: React.FC<PreloaderProps> = ({ timeline }) => {
  const htl = gsap.timeline();
  const wtl = gsap.timeline();
  const htext1 = useRef(null);
  const htext2 = useRef(null);
  const htext3 = useRef(null);
  const fText1 = useRef(null);
  const fText2 = useRef(null);
  const cText1 = useRef(null);
  const wrapper = useRef(null);
  const trans = useRef(null);
  const wrappercontainer = useRef(null);
  const id = useRef(null);
  const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
  const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
  let [timer, setTimer] = useState(10);
  const [randomQuote, setRandomQuote] = useState("");
  let [countdown, setCountdown] = useState(0);

  const showNextText = (
    prevText: RefObject<EventTarget | null>,
    nextText: RefObject<EventTarget | null>,
    dir: string = "normal"
  ) => {
    if (dir === "normal") {
      htl
        .to(prevText.current, {
          duration: 1,
          ease: "back.in",
          opacity: 0,
          display: "none",
        })
        .fromTo(
          nextText.current,
          { opacity: 0, display: "none" },
          {
            display: "block",
            ease: "back.in",
            opacity: 1,
          }
        );
    } else {
      htl
        .to(prevText.current, {
          ease: "back.in",
          opacity: 0,
          x: -400,
          skewY: -15,
          // display: "none",
        })
        .fromTo(
          nextText.current,
          { opacity: 0, display: "none", x: 400 },
          {
            duration: 0.5,
            display: "block",
            ease: "back.out",
            opacity: 1,
            x: 0,
          }
        );
    }
  };

  // useEffect(() => {
  //   if (timer === 7) {
  //     showNextText(htext1, htext2);
  //     showNextText(cText1, cText2, "shift");
  //   } else if (timer === 3) {
  //     showNextText(htext2, htext3);
  //     showNextText(cText2, cText3, "shift");
  //   } else if (timer === 0) {
  //     clear();
  //     time
  //       .to(trans.current, {
  //         duration: 0.8,
  //         attr: { d: start },
  //         ease: "Power2.easeIn",
  //       })
  //       .to(trans.current, {
  //         duration: 1,
  //         attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
  //         ease: "Power5.easeOut",
  //         strokeWidth: "0",
  //       });
  //     wtl.to(wrappercontainer.current, {
  //       opacity: 0,
  //       autoAlpha: 0,
  //       ease: "power2.easeOut",
  //     });
  //   }
  // }, [timer]);

  const locomotiveScroller = () => {
    // Move Locomotive scroller here.
  };

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
      .from(
        [
          htext1.current,
          htext2.current,
          htext3.current,
          fText1.current,
          fText2.current,
        ],
        {
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
        }
      );
  };

  useEffect(() => {
    setRandomQuote(RandomQuote[Math.floor(Math.random() * RandomQuote.length)]);
    animate();
    let startCount = 0;
    let endCount = 100;
    let duration = 5;
    let num = { var: startCount };
    timeline.to(num, duration, {
      var: endCount,
      onUpdate: () => {
        setCountdown(num.var);
        // console.log(num.var.toFixed());
      },
      ease: Linear.easeNone,
      onComplete: () => {
        console.log("Countdown is now complete");
        setTimeout(() => {
          completeAnimate();
        }, 1000);
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
          stroke={cVar("warning")}
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
          <div style={{ overflow: "hidden" }}>
            <Text ref={htext1}>
              <span>Joshua Olajide</span>
            </Text>
          </div>
          <div style={{ overflow: "hidden" }}>
            <Text ref={htext2}>
              <span>Frontend Developer</span>
            </Text>
          </div>
          <div style={{ overflow: "hidden" }}>
            <Text ref={htext3}>
              <span>Lifelong Learner</span>
            </Text>
          </div>
        </Header>
        <Footer>
          <RandomText ref={fText1}>
            <ConditionallyRender client>{randomQuote}</ConditionallyRender>
          </RandomText>
          <Countdown ref={fText2}>
            <span>{countdown.toFixed()}</span>
          </Countdown>
        </Footer>
      </WrapperContainer>
    </Wrapper>
  );
};

export default Preloader;
