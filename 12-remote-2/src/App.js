import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Song() {
  return <div>SONG</div>;
}

function App() {
  const [songs, setsongs] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "http://lot23.com/play/enthusiasticpanther/json/9-connect.php"
    ).then((response) => response.json());

    setsongs(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return <div className="app">{songs && songs.map((song) => <Song />)}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

// https://contactmentor.com/fetch-in-reactjs-example/npx tailwindcss init -p
