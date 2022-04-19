import { cVar } from "@src/helpers";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    --dm-sans: 'DM Sans', sans-serif;
    --din-alternate: 'DIN Alternate', sans-serif;
    /* All css variables goes here */
  }

  body {
    font-size: 16px;
    width:100%;
    scroll-behavior:smooth;
    /* font-family: ${cVar("dmSans")}; */
    background-color: ${cVar("darkWhiteAlt")};


    @media (min-width: 400px) and (max-width: 1200px){
    font-size: calc( 16px + (21 - 16) * ( (100vw - 400px) / ( 1200 - 400) ));
}
      @media (min-width: 1200px){
          font-size: 21px;
      }


  }
  *, *::before, *::after {
    box-sizing: border-box;
  }



  a {
    text-decoration:none;
  }


  &::-webkit-scrollbar {
    width: 3px;
  }

  /* &::-webkit-scrollbar-thumb {
    border-radius:50px;
    background-color: red;
  } */


  `;
