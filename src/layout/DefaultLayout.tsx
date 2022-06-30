import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
interface DefaultLayoutProps {
  children: ReactNode;
  preloader?: Boolean;
}

const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const locomotiveScroll =
  typeof window !== "undefined" ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

function Defaultlayout({ children }: DefaultLayoutProps) {
  const MainContainer = useRef(null);
  let locoScroll: any;

  useEffect(() => {
    if (!MainContainer.current) return;
    // @ts-ignore
    locoScroll = new locomotiveScroll({
      // el: MainContainer.current,
      el: document.querySelector("#home"),
      smooth: true,
      mobile: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
      },
      tablet: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
      },
      reloadOnContextChange: true,
      inertia: 1,
      class: "is-reveal",
      offset: 0,
      multiplier: 1,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      const getTop = document.querySelector("#home");
      // @ts-ignore
      locoScroll.update();
      locoScroll.scrollTo(getTop);
    });

    // image hover effect
    Array.from(document.querySelectorAll(".hover-img")).forEach((el: any) => {
      const imgs: any = Array.from(el.querySelectorAll("img"));
      new hoverEffect({
        parent: el,
        // imagesRatio: 9 / 16, // Use this aspect ratio when you get new image
        intensity: 0.5,
        speedIn: el.dataset.speedin || undefined,
        speedOut: el.dataset.speedout || undefined,
        easing: el.dataset.easing || undefined,
        hover: el.dataset.hover || undefined,
        image1: imgs[0]?.getAttribute("src"),
        image2: imgs[1]?.getAttribute("src"),
        displacementImage: el.dataset.displacement,
      });
    });

    console.clear();
    console.log.apply(console, [
      "Designed by Blessing Omotoyingbo 🎨 and Developed by Joshua Olajide  🥷 \n",
    ]);
    console.log.apply(console, [
      "%c Shooting my shot 🚀, I'm currently open to join a new team, freelance project or collaboration\n",
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
