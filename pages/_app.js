import { useEffect } from "react";
import "../styles/globals.css";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  const tagManagerArgs = {
    gtmId: "GTM-5NDT24D",
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
