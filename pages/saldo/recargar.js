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
            title: "Recargar",
            buttonLeft: true,
            handleButtonLeftURI:
              "https://next-test-git-main.guadalavila.vercel.app/",
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

        <button style={{ marginTop: 50 }} onClick={() => Router.push("/home")}>
          Volver
        </button>
      </main>
    </>
  );
}
