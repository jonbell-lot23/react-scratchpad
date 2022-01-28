import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";

function Song(props) {
  if (props.avg > 65) {
    var bgcolor =
      "item-container rounded-md m-1 text-gray-800 p-2 float-left bg-green-500";
  } else if (props.avg > 45) {
    var bgcolor =
      "item-container rounded-md m-1 text-gray-800 p-2 float-left bg-gray-200";
  } else if (props.avg < 46) {
    var bgcolor =
      "item-container rounded-md m-1 text-gray-800 p-2 float-left bg-red-400";
  }
  return (
    <div className={bgcolor}>
      <div>{props.name}</div>
    </div>
  );
}

function Show(props) {
  if (props.avg > 65) {
    var bgcolor =
      "item-container rounded-md m-1 text-gray-800 p-2 float-left bg-green-500";
  } else if (props.avg > 45) {
    var bgcolor =
      "item-container rounded-md m-1 text-gray-800 p-2 float-left bg-gray-200";
  } else if (props.avg < 46) {
    var bgcolor =
      "item-container rounded-md m-1 text-gray-800 p-2 float-left bg-red-400";
  }
  return (
    <div className={bgcolor}>
      <div>{props.name}</div>
    </div>
  );
}

function App() {
  const [shows, setshows] = useState();
  const [songs, setsongs] = useState();

  // Function to collect data
  const getApiData = async () => {
    const songResponse = await fetch(
      "https://lot23.com/play/enthusiasticpanther/json/9-connect.php"
    ).then((response) => response.json());
    setsongs(songResponse);

    const showResponse = await fetch(
      "https://lot23.com/play/enthusiasticpanther/json/10-shows.php"
    ).then((response) => response.json());
    setshows(showResponse);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Feed />}></Route>
        </Routes>
      </BrowserRouter>

      <h2 className="clear-both text-xl font-bold pt-2 pb-2">Songs</h2>

      {songs &&
        songs.map((song) => (
          <Song name={song.name} avg={Number(song.avg).toFixed()} />
        ))}

      <h2 className="clear-both text-xl font-bold pt-2 pb-2">Shows</h2>

      {shows &&
        shows.map((show) => (
          <Show name={show.location} avg={Number(show.avg).toFixed()} />
        ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

// https://contactmentor.com/fetch-in-reactjs-example/npx tailwindcss init -p
