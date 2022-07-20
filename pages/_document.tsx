import Document, { Html, Main, Head, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&display=swap"
            rel="stylesheet"
          />

          <link href="https://www.joshuaolajide.com/" rel="canonical" />
          <meta name="theme-color" content="#161a19" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#161a19"
          />
          <meta
            name="description"
            content="I’m a frontend engineer that loves to create scalable, fast and
            mobile-first web applications"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Joshua Olajide | Frontend Engineer"
          />
          <meta property="og:url" content="https://www.joshuaolajide.com/" />
          <meta property="og:image" content="images/ogimage.png" />
          <meta
            property="og:description"
            content="I’m a frontend engineer that loves to create scalable, fast and
            mobile-first web applications"
          />
          <meta
            name="twitter:title"
            content="Joshua Olajide | Frontend Engineer"
          />
          <meta
            name="twitter:description"
            content="I’m a frontend engineer that loves to create scalable, fast and
            mobile-first web applications"
          />
          <meta name="twitter:image" content="images/ogimage.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://www.joshuaolajide.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
