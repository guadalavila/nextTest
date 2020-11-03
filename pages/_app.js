import { useEffect } from "react";
import "../styles/globals.css";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  // gtmId: "GTM-5NDT24D",

  const tagManagerArgs = {
    gtmId: "GTM-PZHBNF9",
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
