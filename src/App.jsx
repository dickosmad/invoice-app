import { useState } from "react";
import "./App.css";
import CreateInvoice from "./components/CreateInvoice";
import Header from "./components/Header";
import InvoiceList from "./components/InvoiceList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-wrapper">
        <Header />
        <InvoiceList />
        <CreateInvoice />
      </div>
    </div>
  );
}

export default App;
