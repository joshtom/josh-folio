import { cVar } from "@src/helpers";
import styled from "styled-components";

const ContactContainer = styled.div`
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
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 1s cubic-bezier(0.215, 0.61, 0.355, 1);

  ${({ theme }) => theme.media.mobile} {
    font-size: 10vw;
  }

  &.is-reveal {
    opacity: 1;
    transform: none;
  }
`;

const OverflowEmail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 1.4rem 0;
  ${({ theme }) => theme.transition.default};

  a {
    display: inline-block;
    display: inline-flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(60px);
    transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 1s cubic-bezier(0.215, 0.61, 0.355, 1);

    &.is-reveal {
      opacity: 1;
      transform: none;
    }
  }
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
  cursor: pointer;
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

  & > * {
    opacity: 0;
    transform: translateY(60px);
    transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &.is-reveal > * {
    opacity: 1;
    transform: none;
  }

  &.is-reveal > :first-child {
    transition-delay: 0.06s;
  }
  &.is-reveal > :nth-child(2) {
    transition-delay: 0.12s;
  }
  &.is-reveal > :nth-child(3) {
    transition-delay: 0.18s;
  }
  &.is-reveal > :nth-child(4) {
    transition-delay: 0.24s;
  }
  &.is-reveal > :nth-child(5) {
    transition-delay: 0.3s;
  }
  &.is-reveal > :nth-child(6) {
    transition-delay: 0.36s;
  }

  /* Responsive */
  ${({ theme }) => theme.media.mobile} {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
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

  .c-link {
    display: inline-flex;
    align-items: center;
    position: relative;
    z-index: 1;
    overflow: hidden;

    &__inner {
      display: flex;
      transform: translateY(100%);
      animation: infiniteArrow 1.2s infinite
        cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &__animated {
      position: absolute;
      bottom: 100%;
    }
  }

  @keyframes infiniteArrow {
    100% {
      transform: translateY(0);
    }
  }

  svg {
    transform: rotate(180deg);
    path {
      fill: ${cVar("light")};
    }
  }

  &:hover {
    opacity: 0.9;
  }

  /* Responsiveness */
  ${({ theme }) => theme.media.mobile} {
    right: 27px;
    bottom: 4px;
    display: none;
  }
`;

export { ContactContainer, OverflowEmail, Heading, Email, Socials, ScrollUp };
