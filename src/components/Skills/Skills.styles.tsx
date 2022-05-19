import { cVar } from "@src/helpers";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: auto;
  overflow: scroll;
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
  letter-spacing: 0.08em;
  width: auto;
  color: ${cVar("pink")};
  border: 1.3px solid #aaaaaa57;
  /* border: 1px solid ${cVar("primary")}; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 58px;

  /* &:hover {
    border: 1.3px solid ${cVar("primary")};
  } */
`;

export { Container, Skillset, Skill };