import "@theme/normalize.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import MouseContextProvider from "@context/mouse-context";
import { GlobalStyles } from "@theme/globalStyles";
import { Fragment } from "react";
import DotRing from "@src/components/DotRing/DotRing";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MouseContextProvider>
        <GlobalStyles />
        <Main Component={Component} pageProps={pageProps} />
      </MouseContextProvider>
    </ThemeProvider>
  );
}

const Main = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <DotRing />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
