import Link from "next/link";
import {
  HeaderContainer,
  LogoArea,
  MenuArea,
  LinkArea,
  Links,
} from "./Header.styles";
import { MouseContext } from "@context/mouse-context";
import { useContext, useRef, useEffect, Ref } from "react";
import Logo from "@src/assets/icons/Logo";
import gsap from "gsap";

interface HeaderProps {
  timeline: any;
}

const Header: React.FC<HeaderProps> = ({ timeline }) => {
  let header = useRef(null);
  const linkTop = useRef(null);
  const linkTop2 = useRef(null);
  const linkTop3 = useRef(null);
  const linkBottom = useRef(null);
  const linkBottom2 = useRef(null);
  const linkBottom3 = useRef(null); // Continue from here. Make all nav link animate on hoverer
  const { cursorChangeHandler } = useContext(MouseContext);

  const handleLinkAnimationEnter = (
    linkTop: React.RefObject<HTMLElement>,
    linkBottom: React.RefObject<HTMLElement>
  ) => {
    cursorChangeHandler("hovered");

    gsap.timeline().to(linkTop.current, {
      y: -40,
      duration: 0.9,
      skewY: 15,
    });
    gsap.to(linkBottom.current, {
      y: 0,
      duration: 0.45,
      skewY: 0,
      ease: "back",
    });
  };

  const handleLinkAnimationLeave = (
    linkTop: React.RefObject<HTMLElement>,
    linkBottom: React.RefObject<HTMLElement>
  ) => {
    cursorChangeHandler("");
    gsap.timeline().to(linkBottom.current, {
      y: 40,
      duration: 0.9,
      ease: "back",
    });
    gsap.to(linkTop.current, {
      y: 0,
      duration: 0.45,
      skewY: 0,
    });
  };

  useEffect(() => {
    timeline.from(header.current, {
      // delay: 9,
      ease: "power4.out",
      y: 30,
      opacity: 1,
    });
  }, [timeline]);
  return (
    <HeaderContainer ref={header}>
      <LogoArea>
        <Logo />
      </LogoArea>
      <LinkArea>
        <Links
          onMouseEnter={() => handleLinkAnimationEnter(linkTop, linkBottom)}
          onMouseLeave={() => handleLinkAnimationLeave(linkTop, linkBottom)}
        >
          <Link href="/project" passHref>
            <a>
              <span ref={linkTop}>PROJECTS</span>
              <span ref={linkBottom}>PROJECTS</span>
            </a>
          </Link>
        </Links>
        <Links
          onMouseEnter={() => handleLinkAnimationEnter(linkTop2, linkBottom2)}
          onMouseLeave={() => handleLinkAnimationLeave(linkTop2, linkBottom2)}
        >
          <Link href="#project" passHref>
            <a>
              <span ref={linkTop2}>ABOUT</span>
              <span ref={linkBottom2}>ABOUT</span>
            </a>
          </Link>
        </Links>
        <Links
          onMouseEnter={() => handleLinkAnimationEnter(linkTop3, linkBottom3)}
          onMouseLeave={() => handleLinkAnimationLeave(linkTop3, linkBottom3)}
        >
          <Link href="#project">
            <a>
              <span ref={linkTop3}>CONTACT</span>
              <span ref={linkBottom3}>CONTACT</span>
            </a>
          </Link>
        </Links>
      </LinkArea>
      <MenuArea>
        <p> MENU </p>
      </MenuArea>
    </HeaderContainer>
  );
};

export default Header;
