import { useEffect } from "react";
import styles from "../../styles/Home.module.css";

export default function Recargar() {
  useEffect(() => {
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title:"Recarga",
            buttonLeft: true
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
          <h1>Recarga</h1>
        </div>
      </main>
    </>
  );
}
