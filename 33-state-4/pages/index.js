import Head from "next/head";
import Image from "next/image";
import {
  OuterCircle,
  MiddleCircle,
  InnerCircle,
} from "../components/Circle.js";
import styles from "../styles/Home.module.css";

const bigarray = [];
for (let step = 1; step < 1000; step++) {
  bigarray.push({ step });
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Circle Town</title>
      </Head>

      {bigarray.map((i) => (
        <>
          <div className="relative mr-10 inline">
            <OuterCircle size="12" margin="0" />
            <MiddleCircle size="8" margin="2" />
            <InnerCircle size="4" margin="4" />
          </div>
        </>
      ))}
    </div>
  );
}
