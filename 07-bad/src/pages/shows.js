import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getShows } from "../data";

export default function Shows() {
  let shows = getShows();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          padding: "1rem",
        }}
        class="w-full sm:w-56 relative sm:fixed flex-none top-24 bottom-0 mb-12 sm:mb-0 bg-white overflow-y-auto"
      >
        {shows
          .filter((show) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = show.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((show) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={`/shows/${show.id}`}
              key={show.id}
            >
              {show.location}
              <br /> {show.date}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
