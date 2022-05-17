import { cVar } from "@src/helpers";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    --dm-sans: 'DM Sans', sans-serif;
    --din-alternate: 'DIN Alternate', sans-serif;
    --dm-mono: 'DM Mono', monospace;
    --light: #ffffff;
    --dark: #060606;
    --primary: #FE3F00;
    --warning: #FEF7CD;
    --text-pink: #FDEEE7;
    --gray: #E5E5E5;
    --gray-dark: #C4C4C4;
    --black: #000000;
    --logo-dark: #171717;
    cursor: none;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
  }

  body {
    font-size: 16px;
    width:100%;
    scroll-behavior:smooth;
    background-color: ${cVar("dark")};
    font-family: ${cVar("dinAlternate")};
    cursor: none;


    @media (min-width: 400px) and (max-width: 1200px){
    font-size: calc( 16px + (21 - 16) * ( (100vw - 400px) / ( 1200 - 400) ));
}
      @media (min-width: 1200px){
          font-size: 18px;
      }


  }
  *, *::before, *::after {
    box-sizing: border-box;
  }



  a {
    text-decoration:none;
  }


  /* &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius:50px;
    background-color: transparent;
  } */


  `;
