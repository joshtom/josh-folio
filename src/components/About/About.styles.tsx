import { cVar } from "@src/helpers";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 75%;
  margin: 2rem auto;
  height: auto;
  background-color: ${cVar("dark")};
  padding: 25px 0px;
  h1 {
    color: ${cVar("light")};
  }

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
  }
`;
const AboutParagraph = styled.p`
  font-size: 20px;
  line-height: 40px;
  color: ${cVar("pink")};
  text-align: justify;
  font-weight: 100;
  font-family: ${cVar("dmMono")};
  margin-bottom: 20px;
`;

export { AboutContainer, AboutParagraph };
