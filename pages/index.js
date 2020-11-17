import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function Home() {
  useEffect(() => {
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Home",
          },
        })
      );
    } catch (err) {
      console.log("ReactNativeWebView not exist");
    }
  }, []);

  function handleVerFacturas() {
    Router.push("/facturas");
  }
  function handleVerSaldo() {
    Router.push("/saldo");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Test GTM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
        <button
          style={{
            backgroundColor: "#007cad",
            height: 50,
            marginBottom: 20,
            width: 300,
            borderRadius: 10,
          }}
          onClick={handleVerSaldo}
        >
          <span style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Ver detalle de Saldo
          </span>
        </button>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
