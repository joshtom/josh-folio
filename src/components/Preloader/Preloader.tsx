import { RefObject, useEffect, useRef, useState } from "react";
import { RandomQuote } from "@src/helpers";
import gsap from "gsap";
import {
  Header,
  Footer,
  Text,
  Wrapper,
  RandomText,
  Countdown,
} from "./Preloader.styles";
import ConditionallyRender from "../ConditionalRender/ConditionalRender";

function Preloader() {
  const tl = gsap.timeline();
  const htl = gsap.timeline();
  const htext1 = useRef(null);
  const htext2 = useRef(null);
  const htext3 = useRef(null);
  const fText1 = useRef(null);
  const fText2 = useRef(null);
  const id = useRef(null);
  let [timer, setTimer] = useState(10);
  let [countdown, setCountdown] = useState(0);
  const [randomQuote, setRandomQuote] = useState("");

  const clear = () => {
    window.clearInterval(id.current);
  };

  const renderTimer = () => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const showNextText = (prevText, nextText) => {
    htl
      .to(prevText.current, {
        duration: 1,
        ease: "power2.out",
        opacity: 0,
        display: "none",
      })
      .fromTo(
        nextText.current,
        { opacity: 0, display: "none" },
        {
          display: "block",
          ease: "power4.out",
          opacity: 1,
        }
      );
  };

  useEffect(() => {
    if (timer === 7) {
      showNextText(htext1, htext2);
    } else if (timer === 3) {
      showNextText(htext2, htext3);
    }
    // Clear the timer
    else if (timer === 0) {
      clear();
    }
  }, [timer]);

  useEffect(() => {
    setRandomQuote(RandomQuote[Math.floor(Math.random() * RandomQuote.length)]);
    renderTimer();
    tl.from([htext1.current, fText1.current, fText2.current], {
      duration: 1,
      y: 400,
      ease: "power2.out",
      skewY: 14,
      stagger: {
        amount: 0.5,
      },
    });
  }, []);
  return (
    <Wrapper>
      <Header>
        <Text ref={htext1}>
          Joshua <br /> Olajide
        </Text>
        <Text ref={htext2} style={{ opacity: "0", display: "none" }}>
          Frontend <br /> Engineer
        </Text>
        <Text ref={htext3} style={{ opacity: "0", display: "none" }}>
          Lifelong <br /> Learner
        </Text>
      </Header>
      <Footer>
        <ConditionallyRender client>
          <RandomText ref={fText1}>{randomQuote}</RandomText>
        </ConditionallyRender>
        <Countdown ref={fText2}>
          <span>{countdown}</span>
        </Countdown>
      </Footer>
    </Wrapper>
  );
}

export default Preloader;
