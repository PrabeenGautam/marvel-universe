import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Container from "./components/shared/Container,";
import Header from "./components/shared/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container>
      <Header title="READ FOR FREE" enabledSeeAll link="#" text="See All" />
    </Container>
  </React.StrictMode>,
);
