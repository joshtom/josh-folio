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
  color: ${cVar("primary")};
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

// const projectColor = (color: ProjectType) => {
//   if (color === "asiko") return `${cVar("asikoColor")}`;
//   else if (color === "inawo") return `${cVar("inawoColor")}`;
// };

// Usage
// border-top: 1px solid ${({ color }) => projectColor(color)};
//  border-bottom: 1px solid ${({ color }) => projectColor(color)};

// Check the color passed in the ProjectName component and use that to determine the color that would be applied
const ProjectName = styled.div<{ color: ProjectType }>`
  position: relative;
  font-size: 70px;
  margin: 0 auto;
  padding: 25px 0;
  margin-top: 30px;

  /* overflow: scroll; */
  &::-webkit-scrollbar {
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 0.8px;
    background-color: ${cVar("primary")};
    width: 100%;
    transform: scaleX(0);
    transform-origin: center left;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 0.8px;
    background-color: ${cVar("primary")};
    width: 100%;
    transform: scaleX(0);
    transform-origin: center left;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 10vw;
  }

  &.is-reveal {
    transform: none;
    opacity: 1;
  }
  &.is-reveal:after,
  &.is-reveal:before {
    transform: scaleX(1);
  }
  &.is-reveal:first-child {
    transition-delay: 0.1s;
  }
  &.is-reveal:first-child:after {
    transition-delay: 0.5s;
  }
  &.is-reveal:first-child:before {
    transition-delay: 0.8s;
  }

  p {
    white-space: nowrap;
    color: ${cVar("pink")};
  }
`;

const ProjectBanner = styled.div`
  width: 100%;
  height: 470px;
  background: transparent;
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-size: contain;
  background-position: center center;
  overflow: hidden;

  ${({ theme }) => theme.media.mobile} {
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);

    ${({ theme }) => theme.media.mobile} {
      object-fit: contain;
    }

    &:hover {
      transform: scale(1.1) !important;
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
  margin-top: 2.3rem;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    grid-template-columns: 1fr;
  }
`;
const Title = styled.h3`
  font-size: 48px;
  font-size: 2.5vw;
  font-family: ${cVar("dinAlternate")};
  line-height: 1.4;
  letter-spacing: ${({ theme }) => theme.letterSpacing("0.03")};
  width: 60%;
  margin-bottom: 20px;
  color: ${cVar("pink")};

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

    &:first-child {
      line-height: 1.7;
    }
    &:last-child {
      margin-top: 20px;
      color: ${cVar("white")};
      display: flex;
      align-items: center;

      ${({ theme }) => theme.media.custom(0, 768)} {
        margin-top: 20px;
      }
      svg {
        width: 25px;
        margin-left: 10px;
        ${({ theme }) => theme.transition.default};
        path {
          fill: ${cVar("primary")};
        }
      }

      &:before {
        position: absolute;
        content: "";
        width: 50px;
        border: 1px solid ${cVar("primary")};
        top: -6px;
        left: -15px;
        bottom: -9px;
        border-radius: 50px;
        ${({ theme }) => theme.transition.default};

        ${({ theme }) => theme.media.custom(0, 768)} {
          box-shadow: none;
          border-radius: 38px;
          border: none;
        }
      }

      &:hover > svg {
        transform: rotate(45deg);
        transform-origin: center;
      }

      &:hover::before,
      &:focus::before,
      &:focus-within::before {
        width: 150px;
        border-radius: 38px;
        box-shadow: none;
        border: 1px solid ${cVar("primary")};
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
    position: relative;
    display: inline-block;
    & > img:first-child {
      animation: rotate-animation 10s infinite linear;
    }
    & > section {
      background-color: transparent;
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      bottom: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
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
