import { cVar } from "@src/helpers";
import { FC } from "react";
import styled from "styled-components";

interface LineTextProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  color: ${cVar("pink")};
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${cVar("primary")};
  line-height: 0rem;
  margin: 2rem 0;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing()};

  & > span {
    background: ${cVar("dark")};
    padding: 0 15px;
  }
`;

export const LineText: FC<LineTextProps> = ({ children }) => {
  return (
    <Wrapper>
      <span> {children} </span>
    </Wrapper>
  );
};
