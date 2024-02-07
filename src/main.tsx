import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import ViewSelector from "./components/shared/ViewSelector";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ViewSelector />
  </React.StrictMode>,
);
