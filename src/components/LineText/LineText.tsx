import { cVar } from "@src/helpers";
import { FC, useEffect, useRef } from "react";
import styled from "styled-components";

interface LineTextProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  color: ${cVar("pink")};
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${cVar("grayMid")};
  line-height: 0rem;
  margin: 2rem 0;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing()};
  position: relative;

  & > span {
    background: ${cVar("black2")};
    padding: 7px 20px;
    z-index: 1;
    border: 1px solid ${cVar("grayMid")};
    border-radius: 45px;
    font-family: ${cVar("dmSans")};
    font-weight: 500;
  }
`;

export const LineText: FC<LineTextProps> = ({ children }) => {
  const wrapper = useRef(null);
  return (
    <Wrapper ref={wrapper}>
      <span> {children} </span>
    </Wrapper>
  );
};
