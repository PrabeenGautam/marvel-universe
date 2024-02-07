import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import CharacterCard from "./components/card/CharacterCard";
import Container from "./components/shared/Container,";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container>
      <CharacterCard />
    </Container>
  </React.StrictMode>,
);
