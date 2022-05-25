import { cVar } from "@src/helpers";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  height: auto;
  background-color: ${cVar("dark")};
  /* background-color: red; */
  h1 {
    color: ${cVar("light")};
  }
`;

export { AboutContainer };
