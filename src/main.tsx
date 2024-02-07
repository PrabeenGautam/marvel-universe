import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import CharacterPage from "./pages/CharacterPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CharacterPage />
  </React.StrictMode>,
);
