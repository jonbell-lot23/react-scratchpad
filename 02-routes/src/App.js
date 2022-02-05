import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1 class="text-red-500 text-2xl font-bold p-3 pb-0">Bookkeeper</h1>
      <nav
        class="p-3 pt-0"
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
