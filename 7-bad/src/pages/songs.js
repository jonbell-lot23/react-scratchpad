import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getSongs } from "../data_songs";

export default function Songs() {
  let songs = getSongs();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          padding: "1rem",
        }}
        class="w-full sm:w-56 relative sm:fixed flex-none top-24 bottom-0 mb-12 sm:mb-0 bg-white overflow-y-auto"
      >
        {songs
          .filter((song) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = song.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((song) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={`/songs/${song.id}`}
              key={song.id}
            >
              {song.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
