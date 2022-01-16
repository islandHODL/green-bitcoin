import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container, ThemeProvider } from "theme-ui";
import { theme } from "../utils/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container p={20}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
