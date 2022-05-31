import { cVar } from "@src/helpers";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: auto;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.media.mobile} {
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
  /* border:  1px solid ${cVar("primary")}; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 58px;

  ${({ theme }) => theme.media.mobile} {
    padding: 20px 40px;
  }
`;

export { Container, Skillset, Skill };
