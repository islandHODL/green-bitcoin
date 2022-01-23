import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container, ThemeProvider } from "theme-ui";
import { theme } from "../utils/theme/theme";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container p={20}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
