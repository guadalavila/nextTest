import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Router from "next/router";

export default function Recargar() {
  useEffect(() => {
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            showNavBar: false,
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
