import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "http://lot23.com/play/enthusiasticpanther/json/8-simple.php"
    ).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="app">
      {users &&
        users.map((user) => (
          <div className="item-container">
            Id:{user.id} <div className="title">Title:{user.title}</div>
          </div>
        ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

// https://contactmentor.com/fetch-in-reactjs-example/npx tailwindcss init -p
