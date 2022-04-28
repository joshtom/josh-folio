import { cVar } from "@src/helpers";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${cVar("dark")};
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const HeroHeading = styled.div`
  color: ${cVar("light")};
  font-size: 100px;
  font-family: ${cVar("dinAlternate")};
  overflow: hidden;
`;

const HeroParagraph = styled.div`
  color: ${cVar("light")};
  font-size: 50px;
  font-family: ${cVar("dmSans")};
  font-weight: 100;
  overflow: hidden;
`;

const Main = styled.div``;
const MainHead = styled.header``;
const MainBody = styled.main``;
const Section1 = styled.section``;
const Section2 = styled.section``;
const Section3 = styled.section``;
const MainFooter = styled.footer`
  
`;
export {
  HeroContainer,
  HeroHeading,
  HeroParagraph,
  Main,
  MainHead,
  MainBody,
  Section1,
  Section2,
  Section3,
  MainFooter
};
