import {
  useCallback,
  useState,
  useContext,
  useRef,
  useEffect,
  Fragment,
} from "react";
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
import Logo from "@src/assets/icons/Logo";
import gsap, { Elastic } from "gsap";

interface HeaderProps {
  timeline: any;
}

const Header: React.FC<HeaderProps> = ({ timeline }) => {
  let header = useRef(null);
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
      document.querySelector("body").style.overflow = "hidden";
    } else {
      navtl.current.reverse();
      menuTl.current.reverse();
      document.querySelector("body").style.overflow = "auto";
    }
  }, [open]);

  let handleHover = useCallback(() => {
    cursorChangeHandler("hovered");
  }, []);

  let handleHoverOut = useCallback(() => {
    cursorChangeHandler("");
  }, []);

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

    // Entrance animation
    timeline.from(header.current, {
      delay: 0.5,
      ease: "power4.out",
      y: 30,
      opacity: 1,
    });
  }, [timeline]);

  return (
    <Fragment>
      <MobileContainer ref={mobilecont}>
        <MobileNav ref={mobilenav}>
          <MobileNavLink onClick={handleMobileNav}>
            <a href="#project" data-scroll-to rel="noreferrer">
              {" "}
              project{" "}
            </a>
          </MobileNavLink>
          <MobileNavLink onClick={handleMobileNav}>
            <a href="#about" data-scroll-to rel="noreferrer">
              {" "}
              about{" "}
            </a>
          </MobileNavLink>
          <MobileNavLink onClick={handleMobileNav}>
            <a href="#contact" data-scroll-to rel="noreferrer">
              {" "}
              contact{" "}
            </a>
          </MobileNavLink>
        </MobileNav>
        <MobileSocial>
          <h2 ref={sayhello}>SAY HELLO ✌️</h2>
          <a ref={email} href="mailto:joshuaolarjide@gmail.com">
            joshuaolarjide@gmail.com{" "}
          </a>
          <ul ref={socials}>
            <li>
              <a href="#md" target="_blank" rel="noreferrer">
                {" "}
                MD.{" "}
              </a>
            </li>
            <li>
              <a href="#tw" target="_blank" rel="noreferrer">
                {" "}
                TW.{" "}
              </a>
            </li>
            <li>
              <a href="#ln" target="_blank" rel="noreferrer">
                {" "}
                LN.{" "}
              </a>
            </li>
            <li>
              <a href="#gh" target="_blank" rel="noreferrer">
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
          <Links onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
            <a href="#project" data-scroll-to className="link">
              PROJECTS
            </a>
          </Links>
          <Links onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
            <a href="#about" data-scroll-to className="link">
              ABOUT
            </a>
          </Links>
          <Links onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
            <a href="#contact" data-scroll-to className="link">
              CONTACT
            </a>
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
