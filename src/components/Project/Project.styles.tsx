import { cVar } from "@src/helpers";
import { ProjectType } from "@src/utils/types";
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
  color: ${cVar("pinkDeep")};
  font-family: ${cVar("dinAlternate")};
  text-transform: uppercase;
  font-size: 36px;
  letter-spacing: ${({ theme }) => theme.letterSpacing("0.01")};

  ${({ theme }) => theme.media.mobile} {
    font-size: 24px;
  }
`;
const SubHeading = styled.p`
  font-family: ${cVar("dmSans")};
  color: ${cVar("gray")};
  font-weight: 100;
  width: 35%;
  margin-top: 1rem;

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 4.5rem;
`;

const projectColor = (color: ProjectType) => {
  if (color === "asiko") return `${cVar("asikoColor")}`;
  else if (color === "inawo") return `${cVar("inawoColor")}`;
};

// Check the color passed in the ProjectName component and use that to determine the color that would be applied
const ProjectName = styled.div<{ color: ProjectType }>`
  border-top: 1px solid ${({ color }) => projectColor(color)};
  border-bottom: 1px solid ${({ color }) => projectColor(color)};
  font-size: 64px;
  overflow: scroll;
  margin: 0 auto;
  margin-top: 30px;
  &::-webkit-scrollbar {
    display: none;
  }

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

  ${({ theme }) => theme.media.mobile} {
    height: 300px;
  }

  canvas {
    position: absolute;
    z-index: 0;
    width: 100% !important;
    height: 100% !important;
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
  margin-top: 1.5rem;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    grid-template-columns: 1fr;
  }
`;
const Title = styled.h3`
  font-size: 48px;
  font-size: 2.5vw;
  font-family: ${cVar("dinAlternate")};
  width: 60%;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    font-size: 48px;
    width: 100%;
  }
  ${({ theme }) => theme.media.mobile} {
    font-size: 8vw;
  }
`;

const Info = styled.div<{ color: ProjectType }>`
  display: flex;
  flex-direction: column;

  p {
    font-family: ${cVar("dmSans")};
    position: relative;
    &:last-child {
      margin-top: 40px;
      color: ${({ color }) => projectColor(color)};
      display: flex;

      ${({ theme }) => theme.media.custom(0, 768)} {
        margin-top: 20px;
      }

      svg {
        path {
          fill: ${({ color }) => projectColor(color)};
        }
      }

      &:before {
        position: absolute;
        content: "";
        width: 63px;
        border: 1px solid ${cVar("white")};
        top: -18px;
        left: -15px;
        bottom: -8px;
        border-radius: 50%;
        box-shadow: 0px 2px 12px ${cVar("pink")};
        ${({ theme }) => theme.transition.default};

        ${({ theme }) => theme.media.custom(0, 768)} {
          box-shadow: none;
          border-radius: 38px;
          border: none;
        }
      }

      &:hover::before,
      &:focus::before,
      &:focus-within::before {
        width: 153px;
        border-radius: 38px;
        box-shadow: none;
        border: 1px solid ${cVar("white")};
      }
    }
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
  SubHeading,
  Wrapper,
  ProjectName,
  ProjectBanner,
  ProjectFooter,
  Title,
  Info,
  Footer,
  AnimateBanner,
};
