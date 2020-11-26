import { useEffect } from "react";
import styles from "../../styles/Home.module.css";

export default function Notificaciones() {
  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Monto",
            buttonLeft: true,
          },
        })
      );
    }
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div>
          <h1>Monto</h1>
        </div>
      </main>
    </>
  );
}
