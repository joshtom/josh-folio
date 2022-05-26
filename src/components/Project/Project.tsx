import { useEffect, useRef } from "react";
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
import MoreProject from "@assets/icons/moreProject.png";

interface Projectprops {
  timeline?: any;
}

function Project({ timeline }:  Projectprops) {
  const Cont = useRef(null);
  useEffect(() => {
    timeline.from(Cont.current, {
      delay: 9,
      duration: 6.0,
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
    <ProjectWrapper ref={Cont}>
      <Heading>Selected Projects</Heading>
      <Wrapper>
        <ProjectName>
          <p>
            ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO - ASIKO -
            ASIKO
          </p>
        </ProjectName>
        <ProjectBanner></ProjectBanner>
        <ProjectFooter>
          <Title>SOCIAL LIFESTYLE PLATFORM</Title>
          <Info>
            <p>
              I&apos;ve built products that solve real-life problems ranging
              from Businesses to companies{" "}
            </p>
            <p> VISIT SITE </p>
          </Info>
        </ProjectFooter>
      </Wrapper>

      {/*  */}
      <Wrapper>
        <ProjectName>
          <p>
            {" "}
            INAWO - INAWO - INAWO - INAWO - INAWO - INAWO - INAWO - INAWO -
            INAWO{" "}
          </p>
        </ProjectName>
        <ProjectBanner></ProjectBanner>
        <ProjectFooter>
          <Title>ROBUST EVENT MANAGEMENT SYSTEM</Title>
          <Info>
            <p>
              I&apos;ve built products that solve real-life problems ranging
              from Businesses to companies{" "}
            </p>
            <p> VISIT SITE </p>
          </Info>
        </ProjectFooter>
      </Wrapper>
      <Footer>
        <img src={MoreProject} />
      </Footer>
    </ProjectWrapper>
  );
}

export default Project;
