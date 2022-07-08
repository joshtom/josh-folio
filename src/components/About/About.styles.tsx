import { cVar } from "@src/helpers";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 75%;
  margin: 2rem auto;
  height: auto;
  background-color: transparent;
  padding: 25px 0px;
  h1 {
    color: ${cVar("light")};
  }

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
  }
  & > .accordion {
    /* Disable the last accordion and the accordion line on hover */
    &:last-child {
      & > header {
        border-bottom: none;
        &:focus {
          border-bottom: 1px solid ${cVar("grayMid")};
        }
        .accordion-line {
          background: transparent;
        }
      }
    }
  }
`;
const AboutParagraph = styled.p`
  font-size: 20px;
  line-height: 40px;
  color: ${cVar("pink")};
  font-weight: 100;
  font-family: ${cVar("dmSans")};
  margin-bottom: 20px;
  overflow: hidden;
`;

const Overflow = styled.div`
  overflow: hidden;
`;

const Accordion = styled.div`
  position: relative;
  &[aria-expanded="true"] {
  }
`;

const AccordionHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: none;
  position: relative;
  display: block;
  width: 100%;
  border: none;
  text-align: left;
  padding: 25px 0;
  font-weight: 500;
  font-size: 17px;
  font-family: inherit;
  transition: color 0.2s linear;
  cursor: pointer;
  letter-spacing: ${({ theme }) => theme.letterSpacing("0.08")};
  border-bottom: 1px solid ${cVar("grayMid")};

  .accordion-line {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.1px;
    background-color: ${cVar("primaryLight")};
    transform-origin: center left;
    transform: scaleX(0);
    ${({ theme }) => theme.transition.default};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    p {
      color: ${cVar("primaryLight")};
    }
    .accordion-line {
      transform: scaleX(1);
    }
    &::after,
    &::before {
      background-color: ${cVar("primaryLight")};
    }
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 40px;
    height: 2px;
    background-color: ${cVar("pink")};

    ${({ theme }) => theme.media.mobile} {
      width: 25px;
    }
  }

  &::before {
    transform: rotate(-90deg);
    transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  &[aria-expanded="true"] {
    &::before {
      transform: rotate(0deg);
    }
  }

  p {
    font-size: 5vw;
    color: ${cVar("pink")};
    font-family: ${cVar("dinAlternate")};
    text-transform: uppercase;
    ${({ theme }) => theme.transition.default};

    ${({ theme }) => theme.media.mobile} {
      font-size: 7vw;
    }
  }
`;

const AccordionBody = styled.div`
  color: ${cVar("pink")};
  line-height: 1.7;
  font-family: ${cVar("dmSans")};
  font-weight: 100;
  overflow: hidden;
  will-change: height;
  transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);

  p {
    margin: 5px 0;
    /* opacity: 0; */
  }
`;

export {
  AboutContainer,
  AboutParagraph,
  Overflow,
  Accordion,
  AccordionHeader,
  AccordionBody,
};
