import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import "focus-visible/dist/focus-visible";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Screenshot Mockup - Generate mockups for your screenshots</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
