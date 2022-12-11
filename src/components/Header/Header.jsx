import React, { useState } from "react";

import "./Header.css";
export default function Header() {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <header>
      <div className="header-description-group">
        <h2 className="header-title">Invoices</h2>
        <p className="invoices">
          <span className="hidden-at-mobile">There are</span> 7 invoices
        </p>
      </div>
      <div className="header-flex-group">
        <div className="filters-container">
          <button
            aria-label="Filter By Status"
            className="filter-by-status-btn"
            onClick={() => setShowFilters((prev) => !prev)}
          >
            Filter <span className="hidden-at-mobile">by status</span>{" "}
            <span className="arrow-down">
              {showFilters ? (
                <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 1l4.228 4.228L9.456 1"
                    stroke="#7C5DFA"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 1l4.228 4.228L9.456 1"
                    stroke="#7C5DFA"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              )}
            </span>
          </button>
          {showFilters && (
            <div className="filters">
              <div className="checkbox-container">
                <input id="draft" type="checkbox" value="Draft" />
                <label name="draft" id="draft" htmlFor="draft">
                  Draft
                </label>
              </div>
              <div className="checkbox-container">
                <input id="paid" type="checkbox" value="Paid" />
                <label name="paid" id="paid" htmlFor="paid">
                  Paid
                </label>
              </div>
              <div className="checkbox-container">
                <input id="pending" type="checkbox" value="Pending" />
                <label name="pending" id="pending" htmlFor="pending">
                  Pending
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="add-invoices-btn" aria-label="Add Invoices">
        <span className="add-invoice">
          <icon>+</icon>{" "}
        </span>
        New <span className="hidden-at-mobile">Invoice</span>
      </button>
    </header>
  );
}
