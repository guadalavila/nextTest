import { useEffect } from "react";
import styles from "../../styles/Home.module.css";

export default function Multiplicar() {
  useEffect(() => {
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Multiplicate",
            buttonLeft: true,
            buttonLeftURL:
              "https://next-test.guadalavila.vercel.app/balance/movimientos",
          },
        })
      );
    } catch (err) {
      console.log("ReactNativeWebView not exist");
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
