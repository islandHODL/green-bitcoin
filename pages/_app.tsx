import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { Container, ThemeProvider } from "theme-ui";
// import { theme } from "../utils/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
