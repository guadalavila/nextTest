import { useEffect } from "react";
import styles from "../../styles/Home.module.css";

export default function Multiplicar() {
  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Multiplicate",
            buttonLeft: true,
          },
        })
      );
    }
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1>Multiplicate</h1>
        </div>
      </main>
    </>
  );
}
