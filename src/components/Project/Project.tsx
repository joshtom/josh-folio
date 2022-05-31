import { useEffect, useRef } from "react";
import {
  ProjectWrapper,
  Heading,
  Wrapper,
  ProjectName,
  ProjectBanner,
  ProjectFooter,
  AnimateBanner,
  Title,
  Info,
  Footer,
} from "./Project.styles";
// import MoreProject from "@assets/icons/moreProject.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  const footer1 = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper1.current,
        start: "top-=40px center+=100px",
        // end: "top-=40px",
        end: "bottom",
        // scrub: true,
        markers: true,
        toggleActions: "play none none none",
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper2.current,
        start: "top-=40px center+=100px",
        // end: "top-=40px",
        end: "bottom",
        // scrub: true,
        markers: true,
        toggleActions: "play none none none",
      },
    });

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
      // delay: 9,
      // ease: "power4.out",
      ease: "bounce.out",
      // skewY: 7,
      // y: 400,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    });
  }, [timeline]);
  return (
    // <ProjectWrapper ref={Cont}>
    <ProjectWrapper className="skewElem">
      <Heading ref={heading}>Selected Projects</Heading>
      <Wrapper ref={wrapper1} id="theWrapper">
        <ProjectName>
          <p
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="top"
            data-scroll-direction="horizontal"
          >
            ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO -
            ASIKO
          </p>
        </ProjectName>
        <ProjectBanner>
          <AnimateBanner ref={animeBanner1} />
          <img
            ref={image1}
            src="https://images.unsplash.com/photo-1529025530948-67e8a5c69b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt="banner-image"
          />
        </ProjectBanner>
        <ProjectFooter>
          <Title ref={title1}>SOCIAL LIFESTYLE PLATFORM</Title>
          <Info>
            <p ref={p1}>
              I&apos;ve built products that solve real-life problems ranging
              from Businesses to companies{" "}
            </p>
            <p ref={a1}> VISIT SITE </p>
          </Info>
        </ProjectFooter>
      </Wrapper>

      {/*  */}
      <Wrapper ref={wrapper2} id="theWrapper">
        <ProjectName>
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
        <ProjectBanner>
          <AnimateBanner ref={animeBanner2} />
          <img
            ref={image2}
            src="https://images.unsplash.com/photo-1529025530948-67e8a5c69b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt="banner-image"
          />
        </ProjectBanner>
        <ProjectFooter>
          <Title ref={title2}>ROBUST EVENT MANAGEMENT SYSTEM</Title>
          <Info>
            <p ref={p2}>
              I&apos;ve built products that solve real-life problems ranging
              from Businesses to companies{" "}
            </p>
            <p ref={a2}> VISIT SITE </p>
          </Info>
        </ProjectFooter>
      </Wrapper>
      <Footer>{/* <img src={MoreProject} /> */}</Footer>
    </ProjectWrapper>
  );
}

export default Project;
