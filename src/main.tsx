import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import CharacterHero from "./components/hero/CharacterHero";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CharacterHero />
  </React.StrictMode>,
);
