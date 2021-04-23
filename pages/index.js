import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import aes from 'js-crypto-aes';
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Test GTM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
