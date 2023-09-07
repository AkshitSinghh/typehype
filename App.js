import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import TopBar from "./components/topBar/topBar";
import BodyContents from "./components/bodyContents";
import Footer from "./components/footer/footer";

const Application = () => {
  const [slideAnimation, setSlideAnimation] = useState(false);
  return (
    <div className="application_wrapper">
      <TopBar slideAnimation={slideAnimation} />
      <BodyContents setSlideAnimation={setSlideAnimation} />
      <Footer slideAnimation={slideAnimation} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Application />
  </div>
);
