import { cVar } from "@src/helpers";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  background: transparent;
  color: ${cVar("light")};
  width: 75%;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 7rem;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
  }
`;

const Heading = styled.div`
  color: ${cVar("primary")};
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: ${({ theme }) => theme.letterSpacing("0.01")};
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 4.5rem;
  overflow-x: hidden;
`;

const projectColor = (color: "asiko" | "inawo") => {
  if (color === "asiko") return `${cVar("asikoColor")}`;
  else if (color === "inawo") return `${cVar("inawoColor")}`;
};

// Check the color passed in the ProjectName component and use that to determine the color that would be applied
const ProjectName = styled.div<{ color: "asiko" | "inawo" }>`
  border-top: 1px solid ${({ color }) => projectColor(color)};
  border-bottom: 1px solid ${({ color }) => projectColor(color)};
  font-size: 64px;
  overflow: scroll;
  margin: 0 auto;
  margin-top: 30px;

  ${({ theme }) => theme.media.mobile} {
    font-size: 10vw;
  }

  p {
    white-space: nowrap;
    &:hover {
      color: ${({ color }) => projectColor(color)};
    }
  }
`;

const ProjectBanner = styled.div`
  width: 100%;
  height: 470px;
  background-color: ${cVar("pink")};
  background: #fef7cd;
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
  background-size: cover;

  canvas {
    position: absolute;
    z-index: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      &:nth-child(2) {
        opacity: 1;
      }
    }

    &:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s;
    }
    &:nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s;
    }
  }
`;

const AnimateBanner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${cVar("dark")};
  z-index: 1;
`;

const ProjectFooter = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  margin-top: 1.5rem;
  overflow: hidden;

  /* ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  } */
  ${({ theme }) => theme.media.custom(0, 1024)} {
    grid-template-columns: 1fr;
  }
`;
const Title = styled.h3`
  font-size: 48px;
  font-size: 2.5vw;
  font-family: ${cVar("dinAlternate")};
  /* background-color: red; */
  width: 60%;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    font-size: 48px;
    width: 100%;
  }
  ${({ theme }) => theme.media.mobile} {
    font-size: 8vw;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 10px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & > a {
    &:hover,
    &:focus-visible,
    &:focus-within {
      animation: rotate-animation 10s infinite linear;
    }
  }

  @keyframes rotate-animation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
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
  AnimateBanner,
};
