import React from "react";
import Invoice from "./Invoice";
import "./InvoiceList.css";

function InvoiceList() {
  return (
    <div className="invoice-list-container">
      <Invoice />
      <Invoice />
      <Invoice />
      <Invoice />
    </div>
  );
}

export default InvoiceList;
