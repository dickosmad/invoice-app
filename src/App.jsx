import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
