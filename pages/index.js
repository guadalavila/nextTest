import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import aes from 'js-crypto-aes';
import { add, subtract, isEmail } from "@guadalavila/ts-utils-demo";
export default function Home() {

  useEffect(() => {
   console.log("Suma de 2 y 5 "+add(2,5));
   console.log("REsta de  4000 y 2500 " + subtract(4000,2500));

   console.log(isEmail("guada@hotmail.com"));
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Test GTM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hola</div>
      {/* <div>{add(2,)}</div> */}
    </div>
  );
}
