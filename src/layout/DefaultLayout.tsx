import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
interface DefaultLayoutProps {
  children: ReactNode;
  preloader?: Boolean;
}

const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
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
      el: MainContainer.current,
      smooth: true,
      reloadOnContextChange: true,
      // multiplier: 0.65,
      inertia: 0.3,
      multiplier: 0.65,
      class: "is-reveal",
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0;
      locoScroll.update();
    });

    // console.clear();
    console.log.apply(console, [
      "Designed by Blessing Omotoyingbo 🎨 and Developed by Joshua Olajide  🥷 \n",
    ]);
    console.log.apply(console, [
      "%c Shooting my shot 🚀, I'm currently open to join a new team, freelance project or collaboration\n",
      "color: #000; background: #FDEEE7; padding:5px 0;",
    ]);
  }, []);

  return (
    <DefaultLayoutContainer
      id="main-container"
      data-scroll-container
      ref={MainContainer}
    >
      {children}
    </DefaultLayoutContainer>
  );
}

export default Defaultlayout;
