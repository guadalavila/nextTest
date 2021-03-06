import { useEffect } from "react";
import styles from "../../styles/Home.module.css";

export default function Notificaciones() {

  const handleBtnRight = () =>{
    console.log("se presiono botón");
  }

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Monto",
            buttonLeft: true,
            buttonRight: true,
            iconRight: "close",
            buttonRightURL: "https://www.google.com/"
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
