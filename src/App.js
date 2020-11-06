import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MapContainer from "./component/MapContainer";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <MapContainer />
    </div>
  );
}

export default App;
