import { cVar } from "@src/helpers";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${cVar("white")};
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroHeading = styled.div`
  color: ${cVar("black")};
  font-size: 100px;
  font-family: ${cVar("dinAlternate")};
  overflow: hidden;
  /* background-color: red; */
  /* letter-spacing: 10px; */
`;
const HeroParagraph = styled.div`
  color: ${cVar("black")};
  font-size: 50px;
  font-family: ${cVar("dmSans")};
  font-weight: 100;
  overflow: hidden;
`;
export { HeroContainer, HeroHeading, HeroParagraph };
