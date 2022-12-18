import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateInvoice from "./components/CreateInvoice";
import Header from "./components/Header";
import InvoiceList from "./components/InvoiceList";
import Sidebar from "./components/Sidebar";
import ViewInvoice from "./components/ViewInvoice";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-wrapper">
        <Header />
        <InvoiceList />
        <Routes>
          <Route path="/invoice-view" element={<ViewInvoice />} />
        </Routes>
        {/* <CreateInvoice /> */}
      </div>
    </div>
  );
}

export default App;
