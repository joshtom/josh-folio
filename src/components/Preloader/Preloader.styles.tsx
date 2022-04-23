import { cVar } from "@src/helpers";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 3rem;
  font-family: ${cVar("dinAlternate")};
  background-color: ${cVar("dark")};
  border-bottom: 10px solid ${cVar("primary")};
`;

const Header = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  overflow: hidden;
`;

const Footer = styled.div`
  width: 100%;
  min-height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;
`;

const Text = styled.p`
  font-size: 3vw;
  color: ${cVar("light")};
  font-family: ${cVar("dinAlternate")};
  text-transform: capitalize;
  overflow: hidden;
  line-height: 1.1;

  & > span {
    font-family: ${cVar("dmSans")};
    font-size: 2vw;
    text-transform: capitalize;
  }
`;

const RandomText = styled.p`
  color: ${cVar("light")};
  margin-bottom: 20px;
`;
const Countdown = styled.p`
  font-size: 15vw;
  font-family: ${cVar("dmMono")};
  color: ${cVar("primary")};
  line-height: 0.9;
  overflow: hidden;
`;

const SubText = styled.div`
  font-size: 1.5vw;
  color: white;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;
export {
  Header,
  Footer,
  Wrapper,
  ImageWrapper,
  SubText,
  Text,
  RandomText,
  Countdown,
};
