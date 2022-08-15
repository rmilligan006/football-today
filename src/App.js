import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Standings from "./components/Standings";
import Scores from "./components/Scores";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Scores" element={<Scores />} />
          <Route path="/Standings" element={<Standings />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
