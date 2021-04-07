// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/chakra";
import { DefaultLayout } from "@/chakra/layouts";

import { ScaffoldProvider } from "@/chakra/contexts/scaffold-context";
import MessageRouter from "@/components/message-router";
import ErrorBoundary from "@/components/error-boundary";
import { Layer0Provider } from "@/chakra/components/layer-0";
import { LocalDataProvider } from "@/contexts/local-data-context";

const App = ({ Component, pageProps, router }) => {
  const isDashboard = router.asPath.includes("dashboard");
  console.log(theme);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ErrorBoundary>
        <LocalDataProvider>
          <ScaffoldProvider
          // provides user-context, error-context, toast-context
          >
            <MessageRouter asPath={router.asPath}>
              <Layer0Provider>
                <DefaultLayout>
                  <Component {...pageProps} />
                </DefaultLayout>
              </Layer0Provider>
            </MessageRouter>
          </ScaffoldProvider>
        </LocalDataProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
};

export default App;
