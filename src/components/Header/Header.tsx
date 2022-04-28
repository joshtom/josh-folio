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
          data-text="PROJECTS"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="#project">PROJECTS</Link>
        </Links>
        <Links
          data-text="ABOUT"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="#project">ABOUT</Link>
        </Links>
        <Links
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="#project">CONTACT</Link>
        </Links>
      </LinkArea>
    </HeaderContainer>
  );
}

export default Header;
