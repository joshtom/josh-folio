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
  position: relative;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
    padding-top: 6rem;
  }
  ${({ theme }) => theme.media.custom(0, 468)} {
    padding-top: 3rem;
  }
`;

const HeroHeading = styled.h1<{ desktop: boolean }>`
  color: ${cVar("gray")};
  font-size: 7vw;
  font-family: ${cVar("dinAlternate")};
  overflow: hidden;
  text-transform: uppercase;
  overflow-wrap: normal;
  letter-spacing: 0.01em;
  align-self: center;
  overflow: hidden;

  /* If desktop is true, Only show on desktop */
  display: ${({ desktop }) => (desktop ? "inline-block" : "none")};

  ${({ theme }) => theme.media.mobile} {
    font-size: 12vw;
    line-height: 1.2;
    /* font-weight: 900; */
    display: ${({ desktop }) => (desktop ? "none" : "inline-block")};
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

  ${({ theme }) => theme.media.mobile} {
    margin-top: 5rem;
  }
`;
const MainHead = styled.header`
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 4rem;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.smallLaptop} {
    margin-bottom: 50px;
  }

  ${({ theme }) => theme.media.custom(0, 1024)} {
    gap: 2rem;
  }
  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 5fr 2fr;
    margin-bottom: 20px;
  }
`;
const ScrollerContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  position: relative;
  height: 200px;

  ${({ theme }) => theme.media.smallLaptop} {
    height: 120px;
  }

  ${({ theme }) => theme.media.mobile} {
    height: 120px;
  }
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

  /* Top Line code goes here because it covers section 2 and 3 */
  #topLine {
    position: absolute;
    content: "";
    top: 0;
    height: 1px;
    background-color: ${cVar("primary")};
    left: 0;
    right: 0;
    transform-origin: center left;
    /* transform: scaleX(0); */
  }
`;

const Section1 = styled.section`
  position: relative;
  background-color: ${cVar("black2")};
  width: 100%;
  height: auto;
  height: 200px;
  overflow: hidden;

  /* Tablet */
  ${({ theme }) => theme.media.mobile} {
    height: auto;
  }

  & > img {
    object-fit: cover;
    background-color: ${cVar("black2")};
    filter: grayscale(100%) brightness(70%);
    transition: 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  & > .animatebanner {
    transition: 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:hover {
    & > img {
      filter: none;
      /* transform: scale(1.1) !important; */
    }
    & > .animatebanner {
      transform: translate(-100%, 0) !important;
      opacity: 0.6 !important;
    }
  }
`;
const Section2 = styled.section`
  position: relative;
  font-family: ${cVar("dmSans")};
  padding-top: 1rem;
  height: 160px;
  color: ${cVar("white")};
  line-height: 30px;
  font-size: 16px;

  ${({ theme }) => theme.media.smallLaptop} {
    min-height: 100%;
  }
  ${({ theme }) => theme.media.mobile} {
    height: auto;
  }
`;
const Section3 = styled.section`
  position: relative;
  font-family: ${cVar("dmSans")};
  padding-top: 1rem;
  height: 160px;
  color: ${cVar("white")};
  line-height: 30px;
  font-size: 16px;

  ${({ theme }) => theme.media.smallLaptop} {
    min-height: 100%;
  }
  ${({ theme }) => theme.media.mobile} {
    height: auto;
  }
  a {
    color: ${cVar("white")};
    letter-spacing: ${({ theme }) => theme.letterSpacing("0.07")};
    font-size: 16px;
  }
  & section {
    position: relative;
    bottom: 0;
    margin-top: 25px;
    display: inline-flex;
    align-items: center;

    ${({ theme }) => theme.media.mobile} {
      margin-left: 10px;
      margin-top: 43px;
    }

    &:before {
      position: absolute;
      content: "";
      width: 39%;
      width: 53px;
      border: 1px solid ${cVar("primary")};
      top: -20px;
      left: -10px;
      bottom: -9px;
      border-radius: 32px;
      ${({ theme }) => theme.transition.default};

      ${({ theme }) => theme.media.custom(0, 768)} {
        width: 188px;
        box-shadow: none;
        border-radius: 38px;
        /* border: none; */
      }
    }
    span {
      margin-top: -12px;
      margin-left: 10px;
      svg {
        width: 25px;
        ${({ theme }) => theme.transition.default};
      }
    }

    &:hover > span > svg {
      transform: rotate(45deg);
      transform-origin: center;
    }

    &:hover::before,
    &:focus::before,
    &:focus-within::before {
      width: 190px;
      border-radius: 38px;
      box-shadow: none;
      border: 1px solid ${cVar("primary")};

      ${({ theme }) => theme.media.custom(0, 768)} {
        border: none;
      }
    }
  }
  ${({ theme }) => theme.media.mobile} {
    min-height: 160px;
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
  margin-top: 40px;

  ${({ theme }) => theme.media.smallLaptop} {
    margin-top: 50px;
  }
  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
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
