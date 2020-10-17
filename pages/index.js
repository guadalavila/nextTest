import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  function goToNotification() {
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          back: false,
          label: "se ejecuto boton Notificaciones",
        })
      );
    } catch (e) {}
  }
  function showAlert() {
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ back: true, label: "se ejecuto boton alerta" })
      );
    } catch (e) {}
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
        </div>
      </main>
    </div>
  );
}
