import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(params.id, 10);
  return (
    <main style={{ padding: "1rem" }}>
      <p>
        <span class="font-bold">Location: </span>
        {invoice.location}
      </p>

      <p>
        <span class="font-bold">Date: </span>
        {invoice.date}
      </p>
    </main>
  );
}
