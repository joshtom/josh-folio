import { cVar } from "@src/helpers";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 75%;
  margin: auto;
  padding-top: 3rem;
  height: auto;
  background-color: ${cVar("dark")};
  /* background: red; */
  overflow: hidden;
`;

const HeroHeading = styled.h1`
  color: ${cVar("gray")};
  font-size: 7.4vw;
  font-family: ${cVar("dinAlternate")};
  overflow: hidden;
  text-transform: uppercase;
  overflow-wrap: normal;
  letter-spacing: 0.01em;
`;

const HeroParagraph = styled.div`
  color: ${cVar("light")};
  font-size: 50px;
  font-family: ${cVar("dmSans")};
  font-weight: 100;
  overflow: hidden;
`;

const Main = styled.main`
  width: 100%;
  height: auto;
  color: ${cVar("gray")};
  margin-top: 3rem;
`;
const MainHead = styled.header`
  display: flex;
  gap: 4rem;
  margin-bottom: 20px;
`;
const MainBody = styled.main`
  display: grid;
  grid-template-columns: 428px 1fr 1fr;
  gap: 35px;
  justify-content: center;
  align-items: center;
`;
const Section1 = styled.section`
  position: relative;
  background-color: ${cVar("grayDarker")};
  width: 100%;
  height: 185px;
  overflow: hidden;
`;
const Section2 = styled.section`
  font-family: ${cVar("dmSans")};
  border-top: 1px solid ${cVar("primary")};
  padding-top: 1rem;
  min-height: 150px;
  max-height: 110px;
  /* overflow: hidden; */
`;
const Section3 = styled.section`
  font-family: ${cVar("dmSans")};
  border-top: 1px solid ${cVar("primary")};
  padding-top: 1rem;
  min-height: 150px;
  max-height: 110px;
  /* overflow: hidden; */
  & section {
    position: relative;
    bottom: 0;
    margin-top: 20px;
    display: inline-flex;
    /* background-color: ${cVar("grayDark")}; */
  }
`;
const MainFooter = styled.h1`
  text-align: justify;
  color: ${cVar("gray")};
  font-size: 7.3vw;
  font-family: ${cVar("dinAlternate")};
  overflow: hidden;
  text-transform: uppercase;
  overflow-wrap: normal;

  /* &::after {
    content: "";
    display: inline-block;
    width: 100%;
  } */
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
  MainFooter,
};
