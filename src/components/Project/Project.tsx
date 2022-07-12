import { useEffect, useRef, useContext } from "react";
import { MouseContext } from "@context/mouse-context";
import {
  ProjectWrapper,
  Heading,
  Wrapper,
  ProjectName,
  ProjectBanner,
  ProjectFooter,
  Title,
  Info,
  Footer,
} from "./Project.styles";
import MoreProject from "@assets/icons/mp.png";
import Emoji from "@assets/icons/emoji.png";
import ArrowIcon from "@assets/icons/Arrow";
// import ImageAsiko from "../../assets/images/imageAsiko.png";
import { gsap } from "gsap";
import Image from "next/image";

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;
interface Projectprops {
  timeline?: any;
}

function Project({ timeline }: Projectprops) {
  const Cont = useRef(null);
  const heading = useRef(null);
  const wrapper1 = useRef(null);
  const wrapper2 = useRef(null);
  const animeBanner1 = useRef(null);
  const image1 = useRef(null);
  const animeBanner2 = useRef(null);
  const image2 = useRef(null);
  const title1 = useRef(null);
  const a1 = useRef(null);
  const p1 = useRef(null);
  const title2 = useRef(null);
  const a2 = useRef(null);
  const p2 = useRef(null);
  const container = useRef(null);
  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    tl.to(animeBanner1.current, {
      duration: 1,
      x: "-100%",
      ease: "power2.out",
    })
      .from(image1.current, {
        scale: 1.2,
        duration: 1,
        delay: -1,
        ease: "power2.out",
      })
      .from([title1.current, p1.current, a1.current], {
        duration: 1,
        y: 400,
        ease: "power4.out",
        skewY: 16,
        scale: 1,
        opacity: 0,
        stagger: {
          amount: 0.8,
        },
      });

    tl2
      .to(animeBanner2.current, {
        duration: 1,
        x: "100%",
        ease: "power2.out",
      })
      .from(image2.current, {
        scale: 1.2,
        duration: 1,
        delay: -1,
        ease: "power2.out",
      })
      .from([title2.current, p2.current, a2.current], {
        duration: 1,
        y: 400,
        ease: "power2.out",
        skewY: 16,
        scale: 1,
        opacity: 0,
        stagger: {
          amount: 0.8,
        },
      });

    // HOVER EFFECT

    // new hoverEffect({
    //   parent: container.current,
    //   intensity: 0.3,
    //   image1: "https://picsum.photos/400/600",
    //   image2: "https://picsum.photos/420/620",
    //   displacementImage:
    //     "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    // });
  }, []);

  useEffect(() => {
    timeline.from(Cont.current, {
      ease: "bounce.in",
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    });
  }, [timeline]);
  return (
    <ProjectWrapper
      ref={Cont}
      className="skewElem"
      id="project"
      data-scroll-container
    >
      <Heading ref={heading}>selected projects</Heading>
      <Wrapper ref={wrapper1} id="theWrapper">
        <ProjectName color="asiko" data-scroll>
          <p
            data-scroll
            data-scroll-speed="8"
            data-scroll-repeat={true}
            data-scroll-position="middle"
            data-scroll-direction="horizontal"
          >
            ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO -
            ASIKO
          </p>
        </ProjectName>
        <a href="https://asiko.flutterwave.com">
          <ProjectBanner
            onMouseEnter={() => cursorChangeHandler("linkhover")}
            onMouseLeave={() => cursorChangeHandler("")}
            ref={container}
          >
            <img
              ref={image1}
              src="/images/asiko.png"
              alt="banner-image"
              width="100%"
              height="100%"
            />
          </ProjectBanner>
        </a>
        <ProjectFooter>
          <Title
            ref={title1}
            onMouseEnter={() => cursorChangeHandler("linkhover")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            SOCIAL LIFESTYLE PLATFORM
          </Title>
          <Info color="asiko">
            <p ref={p1}>
              A fun space for you to play games with friends, discover new
              places to shop, watch trending videos, and so much more
            </p>
            <a
              href="https://asiko.flutterwave.com"
              target="_blank"
              rel="noreferrer"
            >
              <p
                ref={a1}
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                {" "}
                VISIT SITE <ArrowIcon />
              </p>
            </a>
          </Info>
        </ProjectFooter>
      </Wrapper>

      <Wrapper ref={wrapper2} id="theWrapper">
        <ProjectName color="inawo" data-scroll>
          <p
            data-scroll
            data-scroll-speed="8"
            data-scroll-position="middle"
            data-scroll-direction="horizontal"
          >
            WISHME - WISHME - WISHME - WISHME - WISHME - WISHME - WISHME -
            WISHME - WISHME
          </p>
        </ProjectName>
        <a
          href="https://curious-creponne-7c16ea.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectBanner
            onMouseEnter={() => cursorChangeHandler("linkhover")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <img
              ref={image1}
              src="/images/wishme.png"
              alt="banner-image"
              width="100%"
              height="100%"
            />
          </ProjectBanner>
        </a>
        <ProjectFooter>
          <Title
            ref={title2}
            onMouseEnter={() => cursorChangeHandler("linkhover")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            BIRTHDAY WISHES PLATFORM
          </Title>
          <Info color="inawo">
            <p ref={p2}>
              Wishme is a space where you can quickly make your wishes come true
              and it enables you to track your wishes realtime
            </p>
            <a
              href="https://curious-creponne-7c16ea.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <p
                ref={a2}
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                {" "}
                VISIT SITE <ArrowIcon />{" "}
              </p>
            </a>
          </Info>
        </ProjectFooter>
      </Wrapper>
      {/*  */}
      <Wrapper id="theWrapper">
        <ProjectName color="inawo" data-scroll>
          <p
            data-scroll
            data-scroll-speed="8"
            data-scroll-position="middle"
            data-scroll-direction="horizontal"
          >
            JOSHFOLIO - JOSHFOLIO - JOSHFOLIO - JOSHFOLIO - JOSHFOLIO -
            JOSHFOLIO - JOSHFOLIO - JOSHFOLIO - JOSHFOLIO
          </p>
        </ProjectName>
        <a href="https://joshuaolajide.com" target="_blank" rel="noreferrer">
          <ProjectBanner
            onMouseEnter={() => cursorChangeHandler("linkhover")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <img
              ref={image1}
              src="/images/folio.png"
              alt="banner-image"
              width="100%"
              height="100%"
            />
          </ProjectBanner>
        </a>
        <ProjectFooter>
          <Title
            ref={title2}
            onMouseEnter={() => cursorChangeHandler("linkhover")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            PERSONAL PORTFOLIO WEBSITE
          </Title>
          <Info color="inawo">
            <p ref={p2}>A new look on my portfolio website</p>
            <a
              href="https://joshuaolajide.com"
              target="_blank"
              rel="noreferrer"
            >
              <p
                ref={a2}
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                {" "}
                VISIT SITE <ArrowIcon />{" "}
              </p>
            </a>
          </Info>
        </ProjectFooter>
      </Wrapper>
      {/*  */}
      <Footer>
        <a
          href="https://github.com/joshtom"
          target="_blank"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          rel="noreferrer"
        >
          <Image src={MoreProject} />
          <section>
            <Image src={Emoji} />
          </section>
        </a>
      </Footer>
    </ProjectWrapper>
  );
}

export default Project;
