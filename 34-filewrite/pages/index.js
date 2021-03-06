import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const writeFileP = require("write-file-p");

export default function Home() {
  // Write a text file
  writeFileP(`output.txt`, "Hello World", (err, data) => {
    console.log(err || data);
  });

  console.log("hi");

  // Write a json syncronously
  writeFileP.sync(`output.json`, {
    hello: "world",
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 text-center p-8 text-white rounded-xl m-12 text-gray-600">
        <h1>Yeah!</h1>
      </div>
    </div>
  );
}
