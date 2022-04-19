import "@theme/normalize.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import Font from "@components/Fonts";
import { GlobalStyles } from "@theme/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Font />
      <Main Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

const Main = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
