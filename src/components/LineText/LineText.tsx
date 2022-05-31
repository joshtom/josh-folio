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
  /* border-width: 0; */
  line-height: 0rem;
  margin: 2rem 0;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing()};
  position: relative;

  & > span {
    background: ${cVar("dark")};
    padding: 7px 20px;
    z-index: 1;
    border: 1px solid ${cVar("grayMid")};
    border-radius: 45px;
    font-family: ${cVar("dmSans")};
    text-transform: capitalize;
    font-weight: 500;
    /* font-size: 12px; */
    /* position: absolute; */
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
