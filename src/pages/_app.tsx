import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
