import { cVar } from "@src/helpers";
import styled from "styled-components";

const ContactContainer = styled.div`
  /* background-color: red; */
  position: relative;
  width: 75%;
  margin: 3rem auto;
  height: auto;
  color: ${cVar("light")};
  border-bottom: 0.5px solid ${cVar("pink")};
  border-bottom: 1px solid ${cVar("grayMid")};
  display: flex;
  flex-direction: column;
  padding: 25px 0px 40px 0;
  margin-bottom: 0;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
  }
`;

const Heading = styled.h1`
  font-size: 5vw;
  line-height: 100px;
  color: ${cVar("pink")};
  font-family: ${cVar("dinAlternate")};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing("0.04")};
  line-height: 1.15;
  text-align: center;

  ${({ theme }) => theme.media.mobile} {
    font-size: 10vw;
  }
`;

const OverflowEmail = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${({ theme }) => theme.transition.default};
`;

const Email = styled.div`
  background-color: ${cVar("grayDark")};
  padding: 10px 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  border-radius: 91px;
  margin: 40px auto;
  font-size: 28px;
  ${({ theme }) => theme.transition.default};

  a {
    display: flex;
    cursor: none;
  }

  p {
    color: ${cVar("pink")};
    letter-spacing: ${({ theme }) => theme.letterSpacing("-0.01")};
    font-family: ${cVar("dmSans")};
    font-weight: 500;
    margin-left: 20px;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 16px;
  }
`;

const Socials = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  place-items: center;
  padding-left: 0;
  gap: 20px;
  width: 60%;
  margin: 0 auto;

  ${({ theme }) => theme.media.mobile} {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`;

const List = styled.li`
  display: flex;
  text-transform: uppercase;
  ${({ theme }) => theme.transition};

  a {
    color: ${cVar("pink")};
    display: flex;
    flex-direction: column;
    height: auto;
    font-size: 16px;
    letter-spacing: ${({ theme }) => theme.letterSpacing("0.08")};
    position: relative;
    cursor: pointer !important;
    ${({ theme }) => theme.transition.default};

    &::before,
    &::after {
      position: absolute;
      width: 100%;
      height: 1px;
      background: ${cVar("pinkDeep")};
      bottom: -4px;
      left: 0;
      pointer-events: none;
    }

    &::before {
      content: "";
    }

    &.link::before {
      transform-origin: 100% 50%;
      transform: scale3d(0, 1, 1);
      transition: transform 0.3s;
      ${({ theme }) => theme.transition.default};
    }

    &.link:hover::before {
      transform-origin: 0% 50%;
      transform: scale3d(1, 1, 1);
    }

    &:hover {
      color: ${cVar("pinkDeep")};
    }
  }
`;

const ScrollUp = styled.div`
  position: absolute;
  bottom: 46px;
  right: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${cVar("grayMid")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ${({ theme }) => theme.transition.default};

  svg {
    transform: rotate(315deg);
    width: 20px;
    ${({ theme }) => theme.transition.default};
    animation: scroll 800ms cubic-bezier(0.76, 0, 0.24, 1) infinite alternate;

    @keyframes scroll {
      0% {
        transform: translateY(-10px) rotate(315deg);
      }

      100% {
        transform: translateY(0px) rotate(315deg);
      }
    }
  }

  &:hover {
    background: ${cVar("primary")};
    svg > path {
      fill: ${cVar("pink")};
    }
  }

  /* Responsiveness */
  ${({ theme }) => theme.media.mobile} {
    right: 27px;
    bottom: 4px;
  }
`;

export {
  ContactContainer,
  OverflowEmail,
  Heading,
  Email,
  Socials,
  List,
  ScrollUp,
};
