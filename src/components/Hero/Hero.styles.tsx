import { cVar } from "@src/helpers";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 75%;
  margin: auto;
  margin-bottom: 3rem;
  padding-top: 3rem;
  height: auto;
  background-color: transparent;
  overflow: hidden;
  opacity: 0;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
  }
`;

const HeroHeading = styled.h1`
  color: ${cVar("gray")};
  font-size: 7vw;
  font-family: ${cVar("dinAlternate")};
  overflow: hidden;
  text-transform: uppercase;
  overflow-wrap: normal;
  letter-spacing: 0.01em;
  align-self: center;
  overflow: hidden;

  ${({ theme }) => theme.media.mobile} {
    font-size: 12vw;
    line-height: 1.2;
    font-weight: 900;
  }
`;

const MainBodyHeading = styled.h1`
  display: none;
  font-family: ${cVar("dinAlternate")};
  text-transform: uppercase;
  line-height: 1.2;
  font-weight: bolder;
  font-size: 70px;
  font-size: 17vw;
  ${({ theme }) => theme.media.mobile} {
    font-size: 12vw;
    display: inline-flex;
  }
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
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 4rem;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    gap: 2rem;
  }
  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 5fr 2fr;
  }
`;
const ScrollerContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBody = styled.main`
  display: grid;
  grid-template-columns: 428px 1fr 1fr;
  gap: 35px;
  justify-content: center;
  align-items: center;
  height: auto;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    grid-template-columns: 300px 1fr 1fr;
    gap: 30px;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Section1 = styled.section`
  position: relative;
  background-color: ${cVar("grayDarker")};
  width: 100%;
  height: auto;
  overflow: hidden;
  & > img {
    object-fit: fill;
  }
`;
const Section2 = styled.section`
  font-family: ${cVar("dmSans")};
  border-top: 1px solid ${cVar("primary")};
  padding-top: 1rem;
  height: 160px;
  ${({ theme }) => theme.media.smallLaptop} {
    min-height: 100%;
  }
  ${({ theme }) => theme.media.mobile} {
    height: auto;
    font-size: 20px;
  }
`;
const Section3 = styled.section`
  font-family: ${cVar("dmSans")};
  border-top: 1px solid ${cVar("primary")};
  padding-top: 1rem;
  height: 160px;
  & section {
    position: relative;
    bottom: 0;
    margin-top: 20px;
    display: inline-flex;
  }
  ${({ theme }) => theme.media.mobile} {
    height: auto;
    font-size: 20px;
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
  margin-top: 20px;
  ${({ theme }) => theme.media.mobile} {
    display: none;
  }

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
  MainBodyHeading,
  Section1,
  Section2,
  Section3,
  MainFooter,
  ScrollerContainer,
};
