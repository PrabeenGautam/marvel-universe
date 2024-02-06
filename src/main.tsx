import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import CharacterHeroWithSearch from "@/components/hero/CharacterHeroWithSearch";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CharacterHeroWithSearch />
  </React.StrictMode>,
);
