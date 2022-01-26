import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getSonglist } from "../data_songlists";

export default function Songlist() {
  return (
    <main
      style={{ padding: "1rem" }}
      className="flex-grow px-4 py-8 w-full prose antialiased ml-0 sm:ml-56 mt-0 sm:mt-12"
    >
      <p>
        <span class="font-bold">Songlist</span>
      </p>
    </main>
  );
}
