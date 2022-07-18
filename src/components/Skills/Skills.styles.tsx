import { cVar } from "@src/helpers";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: auto;
  overflow: hidden;
  opacity: 0;
  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.media.custom(0, 768)} {
    /* overflow: scroll; */
    background-color: transparent;
  }
`;

const Skillset = styled.div`
  height: auto;
  width: 120%;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  gap: 25px;

  &[data-attr="top"] {
    animation: marquee 30s alternate infinite 4s;
    /* will-change: transform; */
  }
  &[data-attr="bottom"] {
    animation: marqueeReverse 30s alternate infinite 4s;
    /* will-change: transform; */
    transform: translate3d(-32%, 0, 0);

    ${({ theme }) => theme.media.mobile} {
      transform: translate3d(-240%, 0, 0);
    }
  }

  @keyframes marquee {
    100% {
      transform: translate3d(-32%, 0, 0);
    }
  }
  @keyframes marqueeReverse {
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }

  /* Keyframes for mobile */
  ${({ theme }) => theme.media.mobile} {
    @keyframes marqueeReverse {
      100% {
        transform: translate3d(0%, 0, 0);
      }
    }
    @keyframes marquee {
      100% {
        transform: translate3d(-253%, 0, 0);
      }
    }
  }
`;

const Skill = styled.div`
  padding: 20px 56px 20px;
  letter-spacing: ${({ theme }) => theme.letterSpacing()};
  width: auto;
  /* color: #5a5a5c; */
  color: ${cVar("pink")};
  border: 1.5px solid ${cVar("grayMid")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 58px;
  font-weight: 100;
  letter-spacing: ${({ theme }) => theme.letterSpacing("0.08")};
  ${({ theme }) => theme.transition.default};

  ${({ theme }) => theme.media.mobile} {
    padding: 20px 40px;
  }

  &.is-reveal {
    border: 1px solid ${cVar("pinkDeep")};
  }
`;

export { Container, Skillset, Skill };
