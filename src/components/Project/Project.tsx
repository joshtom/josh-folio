import { useEffect, useRef, useContext } from "react";
import { MouseContext } from "@context/mouse-context";
import {
  ProjectWrapper,
  Heading,
  SubHeading,
  Wrapper,
  ProjectName,
  ProjectBanner,
  ProjectFooter,
  Title,
  Info,
  Footer,
} from "./Project.styles";
import MoreProject from "@assets/icons/moreProject.png";
import ArrowIcon from "@assets/icons/Arrow";
import { gsap } from "gsap";
import Image from "next/image";

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
      <Heading ref={heading}>I build Product that works 🚀</Heading>
      <SubHeading>
        {" "}
        Not only do I pay attention to every detail but I build product consumed
        by humans.{" "}
      </SubHeading>
      <Wrapper ref={wrapper1} id="theWrapper">
        <ProjectName color="asiko">
          <p
            data-scroll
            data-scroll-speed="2"
            data-scroll-repeat={true}
            data-scroll-position="top"
            data-scroll-direction="horizontal"
          >
            ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO -
            ASIKO
          </p>
        </ProjectName>
        <ProjectBanner
          className="hover-img"
          data-displacement="/images/myDistorsionImage.webp"
          onMouseEnter={() => cursorChangeHandler("linkhover")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          {/* <AnimateBanner ref={animeBanner1} /> */}
          <img
            ref={image1}
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="banner-image"
          />
          <img
            ref={image1}
            src=" https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="banner-image"
          />
        </ProjectBanner>
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
              I&apos;ve built products that solve real-life problems ranging
              from Businesses to companies{" "}
            </p>
            <a href="https://url" target="_blank">
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

      {/*  */}
      <Wrapper ref={wrapper2} id="theWrapper">
        <ProjectName color="inawo">
          <p
            data-scroll
            data-scroll-speed="4"
            data-scroll-position="top"
            data-scroll-direction="horizontal"
          >
            {" "}
            INAWO - INAWO - INAWO - INAWO - INAWO - INAWO - INAWO - INAWO -
            INAWO{" "}
          </p>
        </ProjectName>
        <a href="https://url.com" target="_blank">
          <ProjectBanner
            className="hover-img"
            data-displacement="/images/distortionImage2.jpeg"
            onMouseEnter={() => cursorChangeHandler("linkhover")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <img
              ref={image2}
              src="https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="banner-image"
            />
            <img
              ref={image2}
              src="https://images.unsplash.com/photo-1529025530948-67e8a5c69b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="banner-image"
            />
          </ProjectBanner>
        </a>
        <ProjectFooter>
          <Title
            ref={title2}
            onMouseEnter={() => cursorChangeHandler("linkhover")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            ROBUST EVENT MANAGEMENT SYSTEM
          </Title>
          <Info color="inawo">
            <p ref={p2}>
              I&apos;ve built products that solve real-life problems ranging
              from Businesses to companies{" "}
            </p>
            <a href="https://url" target="_blank">
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
      <Footer>
        <a
          href="https://github.com/joshtom"
          target="_blank"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Image src={MoreProject} />
        </a>
      </Footer>
    </ProjectWrapper>
  );
}

export default Project;
