import Head from "next/head";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";
import styles from "../styles/Home.module.css";

const photos = [
  {
    src: "images/spaceship 1.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 2.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 3.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 4.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 5.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 7.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 8.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 15.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 22.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 41.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 50.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 52.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 63.png",
    width: 800,
    height: 800,
  },
  {
    src: "images/spaceship 64.png",
    width: 800,
    height: 800,
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  );
}