import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import { GlobalStyles } from "../styles/Global";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jules P. - Portfolio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
