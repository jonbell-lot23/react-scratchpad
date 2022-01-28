import logo from "./logo.svg";
import "./App.css";
import Box from "./Box.js";

function App() {
  const Cars = ["Jon", "Trey", "William", "Nate", "Dave"];

  return (
    <div className="App">
      <header className="App-header">
        {Cars.map((car) => (
          <Box value={car} />
        ))}
      </header>
    </div>
  );
}

export default App;
