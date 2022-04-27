import { cVar } from "@src/helpers";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${cVar("dark")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroHeading = styled.div`
  color: ${cVar("light")};
  font-size: 100px;
  font-family: ${cVar("dinAlternate")};
  overflow: hidden;
`;
const HeroParagraph = styled.div`
  color: ${cVar("light")};
  font-size: 50px;
  font-family: ${cVar("dmSans")};
  font-weight: 100;
  overflow: hidden;
`;
export { HeroContainer, HeroHeading, HeroParagraph };
