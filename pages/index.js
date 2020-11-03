import Head from "next/head";
import styles from "../styles/Home.module.css";
import TagManager from "react-gtm-module";

export default function Home() {
  function handleClickVerFactura(e) {
    e.preventDefault();
    console.log("Ver detalle factura fue clickeado");
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

  function goToNotification() {
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          action: "notificaciones",
          label: "se ejecuto boton Notificaciones",
        })
      );
    } catch (err) {
      console.log("No existe ReactNativeWebView");
    }
  }
  function showAlert() {
    const tagManagerArgs = {
      dataLayer: {
        event: "alerta",
        eventCategory: "categoria",
        eventAction: "accion",
        eventLabel: "label",
        eventValue: "value",
      },
    };
    TagManager.dataLayer(tagManagerArgs);

    // window.ReactNativeWebView.postMessage(
    //   JSON.stringify({ back: true, label: "se ejecuto boton alerta" })
    // );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div style={{ marginTop: 30, marginBottom: 30 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <button
            id="btn-notificaciones"
            style={{
              backgroundColor: "#0B2739",
              height: 50,
              marginBottom: 20,
              width: 300,
              borderRadius: 50,
            }}
            onClick={goToNotification}
          >
            <span style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Ir a notificaciones
            </span>
          </button>
          <button
            style={{
              backgroundColor: "#019df4",
              height: 50,
              marginBottom: 20,
              width: 300,
              borderRadius: 50,
            }}
            onClick={showAlert}
          >
            <span style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Ver alerta
            </span>
          </button>
          <a
            href="#"
            onClick={handleClickVerFactura}
            style={{
              color: "#019df4",
            }}
          >
            Ver detalle factura
          </a>
        </div>
      </main>
    </div>
  );
}
