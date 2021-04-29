import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import TagManager from "react-gtm-module";
import { useRouter } from 'next/router';

export default function Saldo() {
  const router = useRouter();
  useEffect(() => {
    // const tagManagerArgs = {
    //   dataLayer: {
    //     event: "screenView",
    //     pageName: "saldo",
    //   },
    // };
    // TagManager.dataLayer(tagManagerArgs);
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Saldo",
            buttonLeft: true,
            iconLeft: "close",
            reload: true,
          },
        })
      );
    }
  }, []);

  function handleClickRecargar() {
    // const tagManagerArgs = {
    //   dataLayer: {
    //     event: "saldo",
    //     eventCategory: "saldo",
    //     eventAction: "detalles de saldo",
    //     eventLabel: "recargar",
    //     eventValue: 50,
    //   },
    // };
    // TagManager.dataLayer(tagManagerArgs);
    router.push("/saldo/recargar");
  }

  function handleClickMultiplicar() {
    // const tagManagerArgs = {
    //   dataLayer: {
    //     event: "saldo",
    //     eventCategory: "saldo",
    //     eventAction: "detalles de saldo",
    //     eventLabel: "multiplicar",
    //   },
    // };
    // TagManager.dataLayer(tagManagerArgs);
    router.push("/multiplicar");
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}></div>
        <button
          style={{
            width: 250,
            padding: 15,
            margin: 20,
            color: "#fff",
            fontWeight: "bold",
            background: "#019df4",
            borderRadius: 4,
            borderWidth: 0,
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
            background: "#5BC500",
            borderRadius: 4,
            borderWidth: 0,
          }}
          onClick={handleClickMultiplicar}
        >
          Multiplicar
        </button>
      </main>
    </>
  );
}
