import { cVar } from "@src/helpers";
import styled from "styled-components";
const ProjectWrapper = styled.div`
  background: transparent;
  color: ${cVar('light')};
  width: 75%;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 7rem;
`;

const Heading = styled.div`
  color: ${cVar("primary")};
  text-transform: uppercase;
  font-size: 24px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  position: relative;
  margin-bottom: 4.5rem;
`;

const ProjectName = styled.div`
  border-top: 1px solid ${cVar("primary")};
  border-bottom: 1px solid ${cVar("primary")};
  font-size: 64px;
  overflow: scroll;
  margin: 0 auto;
  margin-top: 30px;

  p {
    white-space: nowrap;
  }
`;

const ProjectBanner = styled.div`
  width: 100%;
  height: 470px;
  background-color: ${cVar("pink")};
  margin-top: 1.5rem;
`;

const ProjectFooter = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  /* background-color: red; */
`;
const Title = styled.h3`
  font-size: 48px;
  font-size: 2.5vw;
  font-family: ${cVar("dinAlternate")};
  /* background-color: red; */
  width: 60%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  /* background-color: black; */

  article {
    margin-bottom: 10px;
    /* text-align: justify; */
  }
`;

const Footer = styled.footer`
  /* background: red; */
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export {
  ProjectWrapper,
  Heading,
  Wrapper,
  ProjectName,
  ProjectBanner,
  ProjectFooter,
  Title,
  Info,
  Footer,
};
