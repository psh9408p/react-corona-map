import React from "react";
import "./App.css";
import MapContainer from "./component/MapContainer";
import NavBar from "./component/NavBar";
import InfoBox from "./component/InfoBox";

function App() {
  return (
    <div>
      <NavBar />
      <InfoBox />
      <MapContainer />
    </div>
  );
}

export default App;
