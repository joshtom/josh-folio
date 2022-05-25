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

function Project() {
  return (
    <ProjectWrapper>
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
              I've built products that solve real-life problems ranging from
              Businesses to companies{" "}
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
              I've built products that solve real-life problems ranging from
              Businesses to companies{" "}
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
