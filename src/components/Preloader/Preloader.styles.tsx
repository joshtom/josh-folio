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
  top: 0;
  z-index: 100;
  font-family: ${cVar("dinAlternate")};
`;
const WrapperContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 100;
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

  ${({ theme }) => theme.media.custom(0, 768)} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const Wrap = styled.div`
  color: ${cVar("black2")};
  font-family: ${cVar("dinAlternate")};
  text-transform: uppercase;
  overflow: hidden;
  font-weight: 500;
  line-height: 1.1;
  padding: 0;
  opacity: 0;
`;

const RandomText = styled.p`
  color: ${cVar("primary")};
  color: ${cVar("black2")};
  margin-bottom: 20px;
  font-family: ${cVar("dmSans")};
  font-size: 30px;
  font-weight: 100;
  opacity: 0;
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
    margin-bottom: 0px;
    font-size: 24px;
  }
`;
const Countdown = styled.p`
  color: ${cVar("primary")};
  /* color: ${cVar("pinkDeep")}; */
  line-height: 0.9;
  overflow: hidden;
  opacity: 0;

  & > span {
    font-size: 15vw;
  }
  ${({ theme }) => theme.media.mobile} {
    margin-bottom: 1rem;

    & > span {
      font-size: 100px;
    }
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
  fill: ${cVar("pink")};
`;
export {
  Header,
  Footer,
  Wrapper,
  ImageWrapper,
  SubText,
  Wrap,
  RandomText,
  Countdown,
  Trans,
  WrapperContainer,
};
