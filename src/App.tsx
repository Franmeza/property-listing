import { useState } from "react";

import "./App.css";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import PropertyList from "./components/PropertyList";

function App() {
  return (
    <>
      <Background />
      <NavBar />

      <PropertyList />
    </>
  );
}

export default App;
