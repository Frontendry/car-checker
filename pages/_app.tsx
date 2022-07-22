import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/fontawesome-all.css";
import "../assets/css/popuo-box.css";
import "../assets/css/menu.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
