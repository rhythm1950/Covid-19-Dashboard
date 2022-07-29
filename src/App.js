import "./App.css";
import React from "react";
import LiveData from "./components/LiveData/LiveData";

function App() {
  return (
    <div className="pt-5">
      <h1 className="text-center font-weight-bold">
        Live Covid-19 Stats Dashboard
      </h1>
      <LiveData></LiveData>
    </div>
  );
}

export default App;
