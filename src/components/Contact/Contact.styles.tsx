import { cVar } from "@src/helpers";
import styled from "styled-components";

const ContactContainer = styled.div`
  width: 75%;
  margin: 3rem auto;
  height: auto;
  color: ${cVar("light")};
  border-bottom: 0.5px solid ${cVar("pink")};
  border-bottom: 1px solid ${cVar("grayMid")};
  display: flex;
  flex-direction: column;
  padding: 25px 0px;
  margin-bottom: 0;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
  }
`;

const Heading = styled.h1`
  font-size: 5vw;
  line-height: 100px;
  color: ${cVar("pink")};
  font-family: ${cVar("dinAlternate")};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing("0.04")};
  line-height: 1.15;
  text-align: center;
`;

const Email = styled.div`
  background-color: ${cVar("pink")};
  padding: 10px 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  border-radius: 91px;
  margin: 40px auto;
  font-size: 28px;

  a {
    display: flex;
    cursor: none;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 16px;
  }

  p {
    color: ${cVar("dark")};
    letter-spacing: ${({ theme }) => theme.letterSpacing("-0.01")};
    font-family: ${cVar("dmSans")};
    font-weight: 500;
    margin-left: 20px;
  }
`;

const Socials = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 70%;
  margin: 0 auto;

  ${({ theme }) => theme.media.mobile} {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`;

const List = styled.li`
  display: flex;
  text-transform: uppercase;

  a {
    color: ${cVar("pink")};
    /* font-size: 18px; */
    letter-spacing: ${({ theme }) => theme.letterSpacing()};
    cursor: none;
  }
`;

export { ContactContainer, Heading, Email, Socials, List };
