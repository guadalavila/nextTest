import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
    const [isReactNativeWebView, setReactNativeWebView] = useState(true);
    const [value, setValue] = useState(600);


    const onReceiveMessage = useCallback((nativeEvent) => {
      try {
        let nativeMessage = JSON.parse(nativeEvent.data);
            if(nativeMessage.action === "clickRightButton"){
                setValue(Math.floor(Math.random()*1000))
                if (window.ReactNativeWebView) {
                    window.ReactNativeWebView.postMessage(
                        JSON.stringify({
                            type: "NavigationBar",
                            data: {
                                title: "Descubrí",
                                buttonRight: true,
                                buttonRightText: "Listo",
                                disabledRightButton: false,
                            },
                        }),
                    );
                }
            }
            return () => {
              window.removeEventListener('message', onReceiveMessage);
            };
        } catch (err) {
            return;
        }
    }, []);

    // const onReceiveMessage = (nativeEvent) => {
    //   console.log(nativeEvent)
    //   try {
    //     let nativeMessage = JSON.parse(nativeEvent.data);
    //     console.log(nativeMessage)
    //     // if(nativeMessage.action === "clickRightButton"){
    //     //   setValue(Math.floor(Math.random()*1000))
    //     // }
    //   } catch (err) {
    //     return;
    //   }
    // }

    useEffect(() => {
        window.addEventListener("message", onReceiveMessage);
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
                <div style={{fontWeight:"bold", fontSize:50}}>{value}</div>
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
