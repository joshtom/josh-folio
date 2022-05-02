import Link from "next/link";
import { HeaderContainer, LogoArea, LinkArea, Links } from "./Header.styles";
import { MouseContext } from "@context/mouse-context";
import { useContext } from "react";

function Header() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <HeaderContainer>
      <LogoArea>joshua.olajide</LogoArea>
      <LinkArea>
        <Links
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="#project">
            <a data-replace="PROJECTS">
              <span>PROJECTS</span>
            </a>
          </Link>
        </Links>
        <Links
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="#project" passHref>
            <a data-replace="ABOUT">
              <span>ABOUT</span>
            </a>
          </Link>
        </Links>
        <Links
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="#project">
            <a data-replace="CONTACT">
              <span>CONTACT</span>
            </a>
          </Link>
        </Links>
      </LinkArea>
    </HeaderContainer>
  );
}

export default Header;
