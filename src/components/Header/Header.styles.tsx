import { cVar } from "@src/helpers";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "logo . . links";
  gap: 20px;

  /* Media screen mobile */
  ${({ theme }) => theme.media.custom(0, 768)} {
    position: absolute;
    z-index: 100;
    width: 100%;
    margin: auto;
    top: 30px;
  }
`;

const LogoArea = styled.p`
  color: ${cVar("grayMid")};
  grid-area: logo;
  align-self: center;
  justify-items: center;
  font-family: ${cVar("dinAlternate")};
  background-color: ${cVar("grayMid")};
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
  color: ${cVar("pink")};
  justify-content: flex-end;
  height: auto;
  position: relative;
  grid-area: links;
  ${({ theme }) => theme.media.custom(0, 768)} {
    display: flex;
    align-items: center;
    font-size: 20px;
    overflow: hidden;
    width: 100px;
    justify-self: flex-end;
  }
  p {
    position: absolute;
    right: 0;

    &:last-child {
      transform: translateY(40px);
    }
  }
`;

const Links = styled.li`
  font-weight: 700;
  color: ${cVar("pink")};
  cursor: none;
  overflow: hidden;
  transition: all 300ms ease-in-out;

  a {
    color: ${cVar("white")};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 30px;
    position: relative;
    span {
      transition: all 1s ease-in-out;
    }

    &:hover {
      span {
        font-style: italic;
      }
    }
  }
`;

// Mobile navigation styling.
const MobileContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${cVar("dark")};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  padding-top: 150px;
  transform: translateX(100%);
`;

const MobileNav = styled.div`
  width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: column;
`;

const MobileNavLink = styled.div`
  padding: 30px 20px;
  border-top: 1px solid ${cVar("pink")};

  a {
    font-size: 12vw;
    text-transform: uppercase;
    color: ${cVar("pink")};
  }

  &:last-child {
    border-bottom: 1px solid ${cVar("pink")};
  }
`;

const MobileSocial = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  font-size: 5vw;

  h2 {
    color: ${cVar("white")};
    margin-bottom: 10px;
  }

  a {
    color: ${cVar("pink")};
    margin-top: 10px;
    margin-bottom: 10px;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    margin-top: 10px;
    li {
      margin-right: 20px;
      a {
        color: ${cVar("pink")};
      }
    }
  }
`;

export {
  HeaderContainer,
  LogoArea,
  LinkArea,
  MenuArea,
  Links,
  MobileContainer,
  MobileNav,
  MobileNavLink,
  MobileSocial,
};
