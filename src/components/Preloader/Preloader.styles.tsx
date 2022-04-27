import { cVar } from "@src/helpers";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 3rem;
  font-family: ${cVar("dinAlternate")};
`;
const WrapperContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 100;
  /* background-color: red; */
  right: 40px;
  left: 40px;
  bottom: 40px;
  top: 40px;
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
  color: ${cVar("primary")};
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
  color: ${cVar("primary")};
  margin-bottom: 20px;
`;
const Countdown = styled.p`
  font-family: ${cVar("dmMono")};
  color: ${cVar("primary")};
  line-height: 0.9;
  overflow: hidden;

  & > span {
    font-size: 15vw;
  }
`;

const SubText = styled.div`
  font-size: 1.5vw;
  color: white;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;
const Trans = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  fill: ${cVar("warning")};
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
  Trans,
  WrapperContainer,
};
