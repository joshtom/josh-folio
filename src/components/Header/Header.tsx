import { useCallback, useState } from "react";
import Link from "next/link";
import {
  HeaderContainer,
  LogoArea,
  MenuArea,
  LinkArea,
  Links,
  MobileContainer,
  MobileNav,
  MobileNavLink,
  MobileSocial,
} from "./Header.styles";
import { MouseContext } from "@context/mouse-context";
import { useContext, useRef, useEffect, Fragment } from "react";
import Logo from "@src/assets/icons/Logo";
import gsap, { Elastic } from "gsap";

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
  const mobilecont = useRef(null);
  const mobilenav = useRef(null);
  const sayhello = useRef(null);
  const email = useRef(null);
  const socials = useRef(null);
  const { cursorChangeHandler } = useContext(MouseContext);
  const [open, setOpen] = useState(true);
  const navtl = useRef(null);
  const menuTl = useRef(null);
  const openText = useRef(null);
  const closeText = useRef(null);

  let handleMobileNav = useCallback(() => {
    setOpen((open) => !open);
    if (open) {
      menuTl.current.play();
      navtl.current.play();
    } else {
      navtl.current.reverse();
      menuTl.current.reverse();
    }
  }, [open]);

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
    navtl.current = gsap.timeline({ paused: true });
    menuTl.current = gsap.timeline({ paused: true });

    // Animated Menu Text
    menuTl.current.to(openText.current, {
      y: -40,
      autoAlpha: 0,
      skewY: 15,
      duration: 0.9,
      ease: "back",
    });
    menuTl.current.to(closeText.current, {
      y: 0,
      ease: "back",
      autoAlpha: 1,
      delay: 0.1,
    });

    // Animate menu navigation
    navtl.current
      .to(mobilecont.current, {
        x: 0,
        ease: Elastic.easeInOut.config(0.55, 0.9),
        autoAlpha: 1,
      })
      .from(mobilenav.current, { opacity: 0, y: 10 })
      .from([sayhello.current, email.current, socials.current], {
        opacity: 0,
        y: 10,
        ease: "back",
        stagger: {
          amount: 0.3,
        },
      });

    //
    timeline.from(header.current, {
      // delay: 9,
      ease: "power4.out",
      y: 30,
      opacity: 1,
    });
  }, [timeline]);
  return (
    <Fragment>
      <MobileContainer ref={mobilecont}>
        <MobileNav ref={mobilenav}>
          <MobileNavLink>
            <a> project </a>
          </MobileNavLink>
          <MobileNavLink>
            <a> about </a>
          </MobileNavLink>
          <MobileNavLink>
            <a> contact </a>
          </MobileNavLink>
        </MobileNav>
        <MobileSocial>
          <h2 ref={sayhello}>SAY HELLO ✌️</h2>
          <p ref={email}>joshuaolarjide@gmail.com </p>
          <ul ref={socials}>
            <li>
              <a href="#md" target="_blank">
                {" "}
                MD.{" "}
              </a>
            </li>
            <li>
              <a href="#tw" target="_blank">
                {" "}
                TW.{" "}
              </a>
            </li>
            <li>
              <a href="#ln" target="_blank">
                {" "}
                LN.{" "}
              </a>
            </li>
            <li>
              <a href="#gh" target="_blank">
                {" "}
                GH.{" "}
              </a>
            </li>
          </ul>
        </MobileSocial>
      </MobileContainer>
      <HeaderContainer ref={header}>
        <LogoArea>
          <Logo />
        </LogoArea>
        <LinkArea>
          <Links
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <Link href="/project" passHref>
              <a>
                <span ref={linkTop}>PROJECTS</span>
              </a>
            </Link>
          </Links>
          <Links
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <Link href="#project" passHref>
              <a>
                <span ref={linkTop2}>ABOUT</span>
              </a>
            </Link>
          </Links>
          <Links
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <Link href="#project">
              <a>
                <span ref={linkTop3}>CONTACT</span>
              </a>
            </Link>
          </Links>
        </LinkArea>
        <MenuArea onClick={handleMobileNav}>
          <p ref={openText}> MENU </p>
          <p ref={closeText}>CLOSE</p>
        </MenuArea>
      </HeaderContainer>
    </Fragment>
  );
};

export default Header;
