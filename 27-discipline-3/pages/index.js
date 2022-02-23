import Head from "next/head";
const { DateTime, Interval } = require("luxon");

function days_passed() {
  // let then = DateTime.local(2022, 1, 23, 0, 0, 0, 0);

  let then = DateTime.fromObject(
    { year: 2022, month: 1, day: 23 },
    { zone: "NZ", numberingSystem: "beng" }
  );

  let now = DateTime.now();

  let i = Interval.fromDateTimes(then, now);
  let daysPassed = parseInt(i.length("days"));
  console.log("daysPassed " + daysPassed);
  return daysPassed;
}

// epoch 1642849200

export default function Home() {
  // timezone work
  // bogus = DateTime.local().setZone("NZ");
  // console.log(bogus);

  // let disciplineArray = ["◎", "❖", "❖", "✽", "✽", "✿", "❥", "⌘", "✽", "❥"]; // week one
  // let disciplineArray = ["◎", "✽", "❥", "❖", "✿", "✽", "❥", "⌘", "❖", "✿"]; // week two
  let disciplineArray = ["◎", "❥", "❥", "✿", "✿", "❖", "❖", "⌘", "✽", "✽"]; // week four or five
  let daysPassed = days_passed();

  // figure out which thing to load
  var quotient = Math.floor(daysPassed / disciplineArray.length);
  var remainder = daysPassed % disciplineArray.length;

  // now show it
  let disciplineToday = disciplineArray[remainder];

  // this is all correct and works fine
  console.log("quotient: " + quotient);
  console.log("remainder: " + remainder);
  console.log("disciplineToday: " + disciplineToday);

  return (
    <div className="container">
      <Head>
        <title>The Discipline!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{disciplineToday}</main>
      <footer>
        {disciplineArray.map((discipline, i) => {
          console.log("i is " + i);
          console.log("remainder is " + remainder);
          return (
            <>
              {discipline === disciplineToday && i === remainder ? (
                <span className="day today">{discipline}</span>
              ) : (
                <span className="day">{discipline}</span>
              )}
            </>
          );
        })}
      </footer>
      <style jsx>{`
        .day {
          color: black;
          font-size: 24px;
          margin: 2px;
          padding: 6px;
          border-radius: 8px;
        }

        .today {
          background-color: brown;
          color: beige;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: beige;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 16rem;
          color: brown;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
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
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
