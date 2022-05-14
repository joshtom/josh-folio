import Link from "next/link";
import { HeaderContainer, LogoArea, LinkArea, Links } from "./Header.styles";
import { MouseContext } from "@context/mouse-context";
import { useContext, useRef, useEffect } from "react";

interface HeaderProps {
  timeline: any;
}

const Header: React.FC<HeaderProps> = ({ timeline }) => {
  let header = useRef(null);
  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    timeline.from(header.current, {
      delay: 5,
      duration: 2,
      ease: "power4.out",
      y: 100,
      opacity: 1,
    });
  }, []);
  return (
    <HeaderContainer ref={header}>
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
};

export default Header;
