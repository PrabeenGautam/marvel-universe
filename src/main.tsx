import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Container from "./components/shared/Container,";
import DetailCard from "./components/card/DetailCard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container>
      <DetailCard />
    </Container>
  </React.StrictMode>,
);
