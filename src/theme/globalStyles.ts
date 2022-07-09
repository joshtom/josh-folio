import { cVar } from "@src/helpers";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    --dm-sans: 'DM Sans', sans-serif;
    --din-alternate: 'DIN Alternate', sans-serif;
    --dm-mono: 'DM Mono', monospace;
    --light: #ffffff;
    --dark: #161a19;
    --primary: #FE3F00;
    --primary-light: tomato;
    --secondary: #7f9993;
    --warning: #FEF7CD;
    --text-pink: #FDEEE7;
    --text-pink-deep: #dbb59b;
    --gray: #E5E5E5;

    --gray-dark: #262626;
    --gray-mid: #aaaaaa57;
    --gray-darker: #141414;
    --black: #000000;
    --logo-dark: #171717;
    --asiko-color: #f5a623;
    --inawo-color: #587B7F;
    cursor: none;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
    /* Add default margin with its reponsiveness */
    --default-margin: 2rem auto;
    ${({ theme }) => theme.media.custom(0, 1240)} {
      --default-margin: 1rem auto;
    }

    a {
      cursor: none;
    }
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
  /* Custom style */
  .rotate {
    transform: rotate(0deg);
    transform-origin: center;
    /* animation: rotate 7s infinite alternate 2s; */
    animation: rotate 20s linear infinite;
    @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
  }
  
.ANIMATE-TEXT {
  background: linear-gradient(
    to right,
    var(--text-pink) 20%,
    var(--text-pink-deep) 40%,
    var(--warning) 60%,
    var(--light) 80%
  );
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 5s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
  `;
