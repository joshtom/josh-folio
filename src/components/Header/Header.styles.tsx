import { cVar } from "@src/helpers";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "logo . . links";
  gap: 20px;
  /* background-color: red; */
`;

const LogoArea = styled.p`
  color: ${cVar("pink")};
  grid-area: logo;
  align-self: center;
  justify-items: center;
  font-family: ${cVar("dinAlternate")};
  background-color: ${cVar("primary")};
  width: 63px;
  height: 63px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ theme }) => theme.transition.default};

  &:hover {
    background-color: ${cVar("primary")};
  }

  ${({ theme }) => theme.media.mobile} {
    width: 50px;
    height: 50px;

    svg {
      width: 18px;
    }
  }
`;

const LinkArea = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: center;
  justify-items: center;
  gap: 35px;
  grid-area: links;
  ${({ theme }) => theme.media.custom(0, 768)} {
    display: none;
  }
`;

const MenuArea = styled.div`
  display: none;
  /* background-color: red; */
  color: ${cVar("pink")};
  justify-content: flex-end;
  grid-area: links;
  ${({ theme }) => theme.media.custom(0, 768)} {
    display: flex;
    align-items: center;
    font-size: 20px;
  }
`;

const Links = styled.li`
  font-weight: 700;
  color: ${cVar("pink")};
  cursor: none;

  a {
    position: relative;
    display: inline-block;
    color: ${cVar("pink")};
    font-weight: 700;
    overflow: hidden;
    line-height: 2;
    font-size: 16px;
    letter-spacing: ${({ theme }) => theme.letterSpacing()};
    cursor: none;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      left: 0;
    }

    &::after {
      content: attr(data-replace);
      top: 0;
      transform-origin: 100% 50%;
      transform: translate3d(200%, 0, 0);
    }

    &:hover::after,
    &:focus::after {
      transform: translate3d(0, 0, 0);
      transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    }

    &:hover::before {
      transform-origin: 0% 50%;
      transform: scaleX(1);
    }
    &:hover::after {
      transform: translate3d(0, 0, 0);
    }

    span {
      display: inline-block;
      transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    }
    &:hover span {
      transform: translate3d(-200%, 0, 0);
    }
  }
`;

export { HeaderContainer, LogoArea, LinkArea, MenuArea, Links };
