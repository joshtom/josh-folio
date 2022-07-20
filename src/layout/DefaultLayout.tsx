import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
interface DefaultLayoutProps {
  children: ReactNode;
  preloader?: Boolean;
}

// 👨🏽‍🍳

const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const locomotiveScroll =
  typeof window !== "undefined" ? require("locomotive-scroll").default : null;

function Defaultlayout({ children }: DefaultLayoutProps) {
  const MainContainer = useRef(null);
  let locoScroll: any;

  useEffect(() => {
    if (!MainContainer.current) return;
    // @ts-ignore
    locoScroll = new locomotiveScroll({
      el: document.querySelector("#home"),
      smooth: true,
      mobile: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      reloadOnContextChange: true,
      inertia: 0.3,
      class: "is-reveal",
      offset: 0,
      multiplier: 0.65,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      const getTop = document.querySelector("#home");
      // @ts-ignore
      locoScroll.update();
      locoScroll.scrollTo(getTop);
    });

    console.clear();
    console.log.apply(console, [
      "Designed by Blessing Omotoyingbo 🎨 and Developed by Joshua Olajide  🥷 \n",
    ]);
    console.log.apply(console, [
      "%c Shooting my shot 🚀, I'm currently open to join a new team, project or collaboration\n",
      "color: #000; background: #FDEEE7; padding:5px 0;",
    ]);
  }, []);

  return (
    <DefaultLayoutContainer id="home" data-scroll-container ref={MainContainer}>
      {children}
    </DefaultLayoutContainer>
  );
}

export default Defaultlayout;
