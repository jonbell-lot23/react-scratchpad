import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Head from "next/head";
import Link from "next/link";

import Discipline from "../components/discipline";
import Litclock from "../components/litclock";
import Pinboard from "../components/pinboard";
import DaysUntil from "../components/daysuntil";
import Box from "../components/box";
import RandomImage from "../components/RandomImage";
import ImageClock from "../components/ImageClock";

import Masonry from "react-masonry-css";

export default function Home() {
  const [links, setlinks] = useState();
  const [songs, setsongs] = useState();
  let filter = "creativity";

  // Function to collect data
  const getApiData = async () => {
    const linkResponse = await fetch(
      "http://lot23.com/play/json/1-pinboard.php"
    ).then((response) => response.json());
    setlinks(linkResponse);
    console.log(linkResponse);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const [highlighted, setHighlighted] = React.useState();

  const bigarray = [];
  for (let step = 1; step < 3; step++) {
    bigarray.push({ step });
  }

  return (
    <div className="container">
      <Head>
        <title>Fidget Widget</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ImageClock />

        <Discipline />

        <header className="App-header p-8">
          <p>{highlighted ? highlighted : "..."}</p>

          {bigarray.map((i) => (
            <Box
              id={i.step}
              highlight={setHighlighted}
              highlighted={highlighted}
            />
          ))}
        </header>

        <DaysUntil />
      </main>

      <style jsx>{`
        .container {
          margin: 10px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          background-color: beige;          
          background: url('https://source.unsplash.com/random/1000×1000') no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          }
          
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
