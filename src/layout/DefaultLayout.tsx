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
  return (
    <DefaultLayoutContainer id="main-container">
      {children}
    </DefaultLayoutContainer>
  );
}

export default Defaultlayout;
