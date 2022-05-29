import { useParams } from "react-router-dom";
import { getSong } from "../data_songs";
import { Songlist } from "./songlist";

export default function Song() {
  let params = useParams();
  let song = getSong(params.id, 10);
  return (
    <main
      style={{ padding: "1rem" }}
      className="flex-grow px-4 py-8 w-full prose antialiased ml-0 sm:ml-56 mt-0 sm:mt-12"
    >
      <p>
        <span class="font-bold">Name: </span>
        {song.name}
      </p>

      <p>
        <span class="font-bold">Name (Phish conversion): </span>
        {song.name_phish}
      </p>

      <p>
        <span class="font-bold">Name (GD conversion): </span>
        {song.name_gratefuldead}
      </p>
    </main>
  );
}
