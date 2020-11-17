import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import TagManager from "react-gtm-module";

export default function Saldo() {
  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        event: "screenView",
        pageName: "saldo",
      },
    };
    TagManager.dataLayer(tagManagerArgs);
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Saldo",
            buttonLeft: true,
            iconLeft: "close",
          },
        })
      );
    } catch (err) {
      console.log("ReactNativeWebView not exist");
    }
  }, []);

  function handleClickRecargar() {
    const tagManagerArgs = {
      dataLayer: {
        event: "saldo",
        eventCategory: "saldo",
        eventAction: "detalles de saldo",
        eventLabel: "recargar",
        eventValue: 50,
      },
    };
    TagManager.dataLayer(tagManagerArgs);
  }

  function handleClickMultiplicar() {
    const tagManagerArgs = {
      dataLayer: {
        event: "saldo",
        eventCategory: "saldo",
        eventAction: "detalles de saldo",
        eventLabel: "multiplicar",
      },
    };
    TagManager.dataLayer(tagManagerArgs);
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1>Saldo</h1>
        </div>
        <button
          style={{
            width: 250,
            padding: 15,
            margin: 20,
            color: "#fff",
            fontWeight: "bold",
            background: "#019df4",
          }}
          onClick={handleClickRecargar}
        >
          Recargar
        </button>
        <button
          style={{
            width: 250,
            padding: 15,
            margin: 20,
            color: "#fff",
            fontWeight: "bold",
            background: "#019df4",
          }}
          onClick={handleClickMultiplicar}
        >
          Multiplicar
        </button>

        <button style={{ marginTop: 50 }} onClick={() => Router.back()}>
          Volver
        </button>
      </main>
    </>
  );
}
