import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Songs from "./pages/songs";
import Song from "./pages/song";
import Shows from "./pages/shows";
import Show from "./pages/show";
import Songlist from "./pages/songlist";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="songlist" element={<Songlist />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a song</p>
              </main>
            }
          />
          <Route path=":id" element={<Songlist />} />
        </Route>

        <Route path="songs" element={<Songs />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a song</p>
              </main>
            }
          />
          <Route path=":id" element={<Song />} />
        </Route>

        <Route path="shows" element={<Shows />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a show</p>
              </main>
            }
          />
          <Route path=":id" element={<Show />} />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
