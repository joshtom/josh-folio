import { cVar } from "@src/helpers";
import styled from "styled-components";

const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  border: 2px solid rgba(31, 30, 30, 0.808);
  border: 2px solid ${cVar("pink")};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 100ms;
  transition-duration: 150ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  /* mix-blend-mode: difference; */
  z-index: 999;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &.hovered {
    border-width: 3px;
    background-color: ${cVar("pink")};
    mix-blend-mode: difference;
  }
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const Dot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
  background-color: ${cVar("pink")};

  &.hovered {
    display: none;
  }

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export { Ring, Dot };
