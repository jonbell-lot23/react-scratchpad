import Head from "next/head";
import Image from "next/image";
import Circle from "../components/Circle.js";
import styles from "../styles/Home.module.css";

const bigarray = [];
for (let step = 1; step < 200; step++) {
  bigarray.push({ step });
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Circle Town</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {bigarray.map((i) => (
        <Circle />
      ))}
    </div>
  );
}
