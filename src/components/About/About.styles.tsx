import { cVar } from "@src/helpers";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 75%;
  margin: 2rem auto;
  height: auto;
  background-color: ${cVar("dark")};
  /* background: red; */
  /* background-color: red; */
  h1 {
    color: ${cVar("light")};
  }
`;

export { AboutContainer };
