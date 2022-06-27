import { cVar } from "@src/helpers";
import styled from "styled-components";

const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  border: 1px solid ${cVar("light")};
  border-radius: 50%;
  z-index: 999;
  pointer-events: none;
  overflow: hidden;

  section {
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: lighter;

    span {
      font-size: 10px;
      ${({ theme }) => theme.letterSpacing("0.08")};
    }
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
  top: 15px;
  left: 15px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  z-index: 999;
  pointer-events: none;
  background-color: ${cVar("pink")};

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export { Ring, Dot };
