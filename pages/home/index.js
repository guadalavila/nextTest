import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
    const [isReactNativeWebView, setReactNativeWebView] = useState(true);
    const [value, setValue] = useState(600);
    const [edit, setEdit] = useState(false);
    
    useEffect(() => {
        const onReceiveMessage = (nativeEvent) => {
            try {
                let nativeMessage = JSON.parse(nativeEvent.data);
                if (nativeMessage.action === "clickRightButton") {
                    setEdit(!edit);
                    setValue(Math.floor(Math.random() * 1000));
                    window.ReactNativeWebView.postMessage(
                        JSON.stringify({
                            type: "NavigationBar",
                            data: {
                                title: "Descubrí",
                                buttonRight: true,
                                buttonRightText: edit ? "Editar" : "Listo",
                                disabledRightButton: false,
                            },
                        }),
                    );
                }
            } catch (err) {
                return;
            }
        };
        window.addEventListener("message", onReceiveMessage);
        return () => {
            window.removeEventListener("message", onReceiveMessage);
        };
    }, [edit, setEdit]);

    useEffect(() => {
        window.ReactNativeWebView
            ? setReactNativeWebView(true)
            : setReactNativeWebView(false);
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(
                JSON.stringify({
                    type: "NavigationBar",
                    data: {
                        title: "Descubrí",
                        buttonRight: true,
                        buttonRightText: "Editar",
                        disabledRightButton: false,
                    },
                }),
            );
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
                <div style={{ fontWeight: "bold", fontSize: 50 }}>{value}</div>
                <button
                    style={{
                        backgroundColor: "#019df4",
                        height: 50,
                        marginBottom: 20,
                        width: 300,
                        borderRadius: 4,
                        borderWidth: 0,
                    }}
                    onClick={handleVerFacturas}
                >
                    <span
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        Ver Facturas
                    </span>
                </button>
                <button
                    style={{
                        backgroundColor: "#019df4",
                        height: 50,
                        marginBottom: 20,
                        width: 300,
                        borderRadius: 4,
                        borderWidth: 0,
                    }}
                    onClick={handleVerSaldo}
                >
                    <span
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        Ver detalle de Saldo ok
                    </span>
                </button>
                <button
                    style={{
                        backgroundColor: "#019df4",
                        height: 50,
                        marginBottom: 20,
                        width: 300,
                        borderRadius: 4,
                        borderWidth: 0,
                    }}
                    onClick={() => Router.push("/monto")}
                >
                    <span
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        Ver monto
                    </span>
                </button>
                <div className={styles.grid}></div>
            </main>
        </div>
    );
}
