import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Head>
        <title>Contabilidade Tributária</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="url" content="https://exemplo.vercel.app/" />
        <meta property="type" content="website" />
        {/* <link rel="preload" href="/img/bgImage.webp" as="image" />
        <link rel="preload" href="/img/image.webp" as="image" /> */}
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;