import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  dataLayer: {
    event: "screenView",
    pageName: "home",
  },
};
export default function Home() {
  // useEffect(() => {
  //   console.log("Home cargado");
  //   TagManager.dataLayer(tagManagerArgs);
  // }, []);

  function handleVerFacturas() {
    Router.push("/facturas");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Test GTM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <button
            style={{
              backgroundColor: "#019df4",
              height: 50,
              marginBottom: 20,
              width: 300,
              borderRadius: 10,
            }}
            onClick={handleVerFacturas}
          >
            <span style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Ver Facturas
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
