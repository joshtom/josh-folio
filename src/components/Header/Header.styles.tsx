import { cVar } from "@src/helpers";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  margin-top: 2rem;
  grid-template-areas: "logo . . links";
  gap: 20px;
`;

const LogoArea = styled.p`
  color: ${cVar("pink")};
  grid-area: logo;
  align-self: center;
  justify-items: center;
  font-family: ${cVar("dinAlternate")};
`;

const LinkArea = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: center;
  justify-items: center;
  gap: 20px;
  grid-area: links;
`;

const Links = styled.li`
  overflow: hidden;
  line-height: 2;
  font-weight: 700;
  color: ${cVar("pink")};
  line-height: 2;
  cursor: none;

  a {
    color: ${cVar("pink")};
    font-weight: 700;
    overflow: hidden;
    line-height: 2;
    cursor: none;
  }
`;

export { HeaderContainer, LogoArea, LinkArea, Links };
