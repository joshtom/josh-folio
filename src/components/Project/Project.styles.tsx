import { cVar } from "@src/helpers";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  background: transparent;
  color: ${cVar("light")};
  width: 75%;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 7rem;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
  }
`;

const Heading = styled.div`
  color: ${cVar("primary")};
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: ${({ theme }) => theme.letterSpacing("0.01")};
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 4.5rem;
`;

const ProjectName = styled.div`
  border-top: 1px solid ${cVar("primary")};
  border-bottom: 1px solid ${cVar("primary")};
  font-size: 64px;
  overflow: scroll;
  margin: 0 auto;
  margin-top: 30px;

  ${({ theme }) => theme.media.mobile} {
    font-size: 10vw;
  }

  p {
    white-space: nowrap;
  }
`;

const ProjectBanner = styled.div`
  width: 100%;
  height: 470px;
  background-color: ${cVar("pink")};
  background: #fef7cd;
  margin-top: 1.5rem;
`;

const ProjectFooter = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  margin-top: 1.5rem;

  /* ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  } */
  ${({ theme }) => theme.media.custom(0, 1024)} {
    grid-template-columns: 1fr;
  }
`;
const Title = styled.h3`
  font-size: 48px;
  font-size: 2.5vw;
  font-family: ${cVar("dinAlternate")};
  /* background-color: red; */
  width: 60%;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    font-size: 48px;
    width: 100%;
  }
  ${({ theme }) => theme.media.mobile} {
    font-size: 8vw;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 10px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export {
  ProjectWrapper,
  Heading,
  Wrapper,
  ProjectName,
  ProjectBanner,
  ProjectFooter,
  Title,
  Info,
  Footer,
};
