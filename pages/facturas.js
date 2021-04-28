import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { facturas } from "../utils/mock";
import TagManager from "react-gtm-module";

export default function Facturas() {
  useEffect(() => {
    // const tagManagerArgs = {
    //   dataLayer: {
    //     event: "screenView",
    //     pageName: "facturas_ultimas_facturas",
    //   },
    // };
    // TagManager.dataLayer(tagManagerArgs);
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Facturas",
            buttonLeft: true,
            backgroundColor: "#5BC500",
          },
        })
      );
    }
  }, []);

  function handleClickVerFactura(periodo) {
    // const tagManagerArgs = {
    //   dataLayer: {
    //     event: "facturas",
    //     eventCategory: "facturas",
    //     eventAction: "ver detalles de factura",
    //     eventLabel: `factura del mes ${periodo}`,
    //     eventValue: 2020,
    //   },
    // };
    // TagManager.dataLayer(tagManagerArgs);
  }
  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1>Últimas Facturas...</h1>
        </div>
        {facturas.map((factura) => (
          <div style={{ margin: 10 }} key={factura.title}>
            <span style={{ marginRight: 10 }}>{factura.title}</span>
            <button
              style={{
                color: "#019df4",
                fontWeight: "bold",
                background: "#fff",
                borderColor: "#fff",
              }}
              onClick={() => handleClickVerFactura(factura.periodo)}
            >
              <span>Ver detalle factura</span>
            </button>
          </div>
        ))}
      </main>
    </>
  );
}
