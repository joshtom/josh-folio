import { ReactNode, useState, useRef, useEffect } from "react";
import Preloader from "@src/components/Preloader/Preloader";
import { cVar } from "@src/helpers";
import styled from "styled-components";

interface DefaultLayoutProps {
  children: ReactNode;
  preloader?: Boolean;
}

const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Defaultlayout({ children }: DefaultLayoutProps) {
  let [timer, setTimer] = useState(13);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
  };

  const renderPreloader = () => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  useEffect(() => {
    renderPreloader();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
      import("locomotive-scroll").then((locomotiveModule) => {
        let scroll = new locomotiveModule.default({
          el: document.querySelector("#main-container"),
          smooth: true,
          multiplier: 1,
          class: "is-reveal",
        });
      });
      console.log("Locomotive scroll added");
    }
  }, [timer]);
  return (
    <DefaultLayoutContainer id="main-container">
      {children}
    </DefaultLayoutContainer>
  );
}

export default Defaultlayout;
