import React from "react";
import Invoice from "./Invoice";
import "./InvoiceList.css";

function InvoiceList() {
  return (
    <div className="invoice-list-container">
      <Invoice id="1" />
      <Invoice id="2" />
      <Invoice id="3" />
      <Invoice id="4" />
    </div>
  );
}

export default InvoiceList;
