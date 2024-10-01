import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MycartCont from "./cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <MycartCont>
    <App />
  </MycartCont>
);
