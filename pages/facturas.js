import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { facturas } from "../utils/mock";
import TagManager from "react-gtm-module";
const tagManagerArgs = {
  dataLayer: {
    event: "screenView",
    pageName: "facturas_ultimas_facturas",
  },
};
export default function Facturas() {
  // useEffect(() => {
  //   TagManager.dataLayer(tagManagerArgs);
  // }, []);
  function handleClickVerFactura(periodo) {
    const tagManagerArgs = {
      dataLayer: {
        event: "facturas",
        eventCategory: "facturas",
        eventAction: "ver detalles de factura",
        eventLabel: `factura del mes ${periodo}`,
      },
    };
    TagManager.dataLayer(tagManagerArgs);
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
        <button style={{ marginTop: 50 }} onClick={() => Router.back()}>
          Volver
        </button>
      </main>
    </>
  );
}
