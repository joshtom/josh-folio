import { cVar } from "@src/helpers";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 80%;
  margin: auto;
  min-height: 100vh;
  background-color: ${cVar("dark")};
`;

const HeroHeading = styled.div`
  color: ${cVar("light")};
  font-size: 7vw;
  font-family: ${cVar("dinAlternate")};
  overflow: hidden;
  text-transform: uppercase;
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
  margin-top: 4rem;
`;
const MainHead = styled.header`
  display: flex;
  gap: 3rem;
`;
const MainBody = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
const Section1 = styled.section`
  position: relative;
  background-color: ${cVar("grayDark")};
  width: 100%;
  height: 230px;
  overflow: hidden;

  img {
    filter: grayscale(100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
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
    background-color: ${cVar("grayDark")};
  }
`;
const MainFooter = styled.footer`
  text-align: justify;
  color: ${cVar("light")};
  font-size: 7.5vw;
  font-family: ${cVar("dinAlternate")};
  overflow: hidden;
  text-transform: uppercase;
  overflow-wrap: normal;

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
  }
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
