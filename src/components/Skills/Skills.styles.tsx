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
    overflow: scroll;
  }
`;

const Skillset = styled.div`
  height: auto;
  width: 120%;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  gap: 25px;
`;

const Skill = styled.div`
  padding: 25px 50px;
  letter-spacing: ${({ theme }) => theme.letterSpacing()};
  width: auto;
  color: ${cVar("pink")};
  border: 1px solid ${cVar("grayMid")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 58px;
  letter-spacing: ${({ theme }) => theme.letterSpacing("0.08")};
  ${({ theme }) => theme.transition.default};

  ${({ theme }) => theme.media.mobile} {
    padding: 20px 40px;
  }

  &.is-reveal {
    border: 1px solid ${cVar("pinkDeep")};
  }

  &:hover {
    border: 1px solid ${cVar("primary")};
  }
`;

export { Container, Skillset, Skill };
