import React from "react";

import "./Invoice.css";

export default function Invoice() {
  return (
    <>
      <ul className="invoice-card">
        <li className="invoice-id">
          <span>#</span>RT2123{" "}
        </li>
        <li className="invoice-date">Due 12 Oct 2012 </li>
        <li className="invoice-owner"> Jhon Doe </li>
        <li className="invoice-price">£102.04 </li>
        <li className="invoice-status">
          {" "}
          <span className="status pending-status">
            <icon className="dot pending-status-dot"></icon>
            Pending
          </span>
          <span className="right-arrow">
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#7C5DFA"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        </li>
      </ul>
    </>
  );
}
