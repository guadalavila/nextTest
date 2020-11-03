import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import TagManager from "react-gtm-module";

export default function Facturas() {
  function handleClickVerFactura(e) {
    e.preventDefault();
    const tagManagerArgs = {
      dataLayer: {
        event: "facturas",
        eventCategory: "facturas",
        eventAction: "ver detalles de factura",
        eventLabel: "factura del mes",
      },
    };
    TagManager.dataLayer(tagManagerArgs);
  }
  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1>Facturas...</h1>
        </div>
        <div style={{ margin: 10 }}>
          <a
            href="#"
            onClick={handleClickVerFactura}
            style={{
              color: "#019df4",
              fontWeight: "bold",
            }}
          >
            Ver detalle factura 1
          </a>
        </div>
        <div style={{ marginTop: 10, marginBottom: 30 }}>
          <a
            href="#"
            onClick={handleClickVerFactura}
            style={{
              color: "#019df4",
              fontWeight: "bold",
            }}
          >
            Ver detalle factura 2
          </a>
        </div>
        <button onClick={() => Router.back()}>Volver</button>
      </main>
    </>
  );
}
