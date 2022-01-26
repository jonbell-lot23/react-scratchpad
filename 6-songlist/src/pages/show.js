import { useParams } from "react-router-dom";
import { getShow } from "../data";
import { getPlaylist } from "../data_playlist";

export default function Show() {
  let params = useParams();
  let show = getShow(params.id, 10);

  console.log({ playlist: getPlaylist(params.id) });
  let playlist = getPlaylist(params.id);

  return (
    <main
      style={{ padding: "1rem" }}
      className="flex-grow px-4 py-8 w-full prose antialiased ml-0 sm:ml-56 mt-0 sm:mt-12"
    >
      <p>
        <span class="font-bold">Location: </span>
        {show.location} {show.id}
      </p>

      <p>
        <span class="font-bold">Date: </span>
        {show.date}
      </p>

      <p>
        <span class="font-bold">Playlist: </span>
      </p>

      {playlist.map((songname) => (
        <div>{songname}</div>
      ))}
    </main>
  );
}
