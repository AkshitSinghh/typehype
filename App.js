import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TopBar from "./components/topBar/topBar";
import BodyContents from "./components/bodyContents";
import Footer from "./components/footer/footer";

const Application = () => {
  return (
    <div className="application_wrapper">
      <TopBar />
      <BodyContents />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Application />
  </div>
);
