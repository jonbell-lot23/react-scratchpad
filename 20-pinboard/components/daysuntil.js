import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import Link from "next/link";
const { DateTime, Interval } = require("luxon");

function daysUntil(deadline) {
  let now = DateTime.now();
  let deadlineReturn = DateTime.fromISO(deadline);
  let i = 0;

  if (deadlineReturn > now) {
    i = Interval.fromDateTimes(DateTime.local(), DateTime.fromISO(deadline));
    let daysUntil = parseInt(i.length("days"));
    return daysUntil;
  } else {
    i = Interval.fromDateTimes(DateTime.fromISO(deadline), DateTime.local());
    let daysUntil = parseInt(i.length("days"));
    let daysPast = Math.abs(daysUntil) * -1;
    return daysPast;
  }
}

export default function Home() {
  let deadlinesArray = [
    {
      title: "NFFN 9",
      due: "2022-02-15",
      notes: "Shipped and awesome!",
    },
    {
      title: "Plebe 11: The Girls Story",
      due: "2022-04-01",
      notes: "2/10 chapters edited and narrated.",
    },
    {
      title: "NFFN 15",
      due: "2022-05-15",
    },
  ];

  return (
    <div className="container">
      <Head>
        <title>Days until</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <footer>
            {deadlinesArray.map((deadline, i) => {
              let daysUntilDeadline = daysUntil(deadline.due);
              let color = "bg-white";

              if (daysUntilDeadline > 60) {
                color = "bg-green-500";
              } else if (daysUntilDeadline < 10) {
                color = "bg-orange-200";
              } else if (parseInt(daysUntilDeadline) < 0) {
                color = "bg-red-400";
              }

              return (
                <span
                  className={`${color} float-left p-5 m-1 bg-white shadow-sm rounded-md hover:bg-sky-100`}
                >
                  <h2>{deadline.title}</h2>
                  <div className="italic">{daysUntilDeadline} days away</div>
                  <div className="mt-3">{deadline.notes}</div>
                </span>
              );
            })}
          </footer>
        </div>
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #efefef;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
