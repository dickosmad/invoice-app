import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-wrapper">
      <Header />
      </div>
    </div>
  );
}

export default App;
