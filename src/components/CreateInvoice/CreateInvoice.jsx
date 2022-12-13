import React from "react";

import "./CreateInvoice.css";

export default function CreateInvoice() {
  return (
    <aside className="create-invoice-wrapper">
      <form className="create-invoice">
        <h3 className="create-invoice-title">New Invoice</h3>
        <div className="bill-adress">
          <h5>Bill From</h5>
          <div className="input-group">
            <label className="adress" id="address" htmlFor="address">
              Street Adress
            </label>
            <input
              className="adress"
              name="address"
              placeholder="Street Adress"
            />
          </div>
          <div className="bill-zip-country-city-group">
            <div className="input-group">
              <label className="city" id="city" htmlFor="city">
                City
              </label>
              <input className="city" name="city" placeholder="London" />
            </div>
            <div className="input-group">
              <label className="post-code" id="post-code" htmlFor="post-code">
                Post Code
              </label>
              <input
                className="post-code"
                name="post-code"
                placeholder="E13Z"
              />
            </div>
            <div className="input-group">
              <label className="country" id="country" htmlFor="country">
                Country
              </label>
              <input
                className="country"
                name="country"
                placeholder="United Kingdom"
              />
            </div>
          </div>
        </div>
        <div className="bill-owner">
          <h5>Bill To</h5>
          <div className="input-group">
            <label className="name" id="name" htmlFor="name">
              Client's Name
            </label>
            <input className="name" name="name" placeholder="Alex Grim" />
          </div>
          <div className="input-group">
            <label className="name" id="name" htmlFor="name">
              Client's Email
            </label>
            <input
              className="email"
              name="email"
              placeholder="dicko@gmail.com"
            />
          </div>
          <div className="input-group">
            <label
              className="owner-adress"
              id="owner-adress"
              htmlFor="owner-adress"
            >
              Street Address
            </label>
            <input
              className="owner-adress"
              name="owner-adress"
              placeholder="84 Church Street"
            />
          </div>
          <div className="client-zip-country-city-group">
            <div className="input-group">
              <label className="city" id="city" htmlFor="city">
                City
              </label>
              <input className="city" name="city" placeholder="London" />
            </div>
            <div className="input-group">
              <label className="post-code" id="post-code" htmlFor="post-code">
                Post Code
              </label>
              <input
                className="post-code"
                name="post-code"
                placeholder="E13Z"
              />
            </div>
            <div className="input-group">
              <label className="country" id="country" htmlFor="country">
                Country
              </label>
              <input
                className="country"
                name="country"
                placeholder="United Kingdom"
              />
            </div>
          </div>
          <div className="invoice-date-group">
            <div className="input-group">
              <label className="date" id="date" htmlFor="date">
                Invoice Date
              </label>
              <input
                className="date"
                name="date"
                placeholder="84 Church Street"
                type="date"
              />
            </div>
            <div className="input-group">
              <label className="date" id="date" htmlFor="date">
                Payment Terms
              </label>
              <select
                className="payment-terms"
                name="payment-terms"
                id="payment-terms"
              >
                <option value="Net 1 Day">Net 1 Day</option>
                <option value="Net 7 Day">Net 7 Days</option>
                <option value="Net 14 Day">Net 14 Days</option>
                <option value="Net 30 Day">Net 30 Days</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <label
              className="project-desc"
              id="project-desc"
              htmlFor="project-desc"
            >
              Project Description
            </label>
            <input
              className="project-desc"
              name="project-desc"
              placeholder="Graphic Design"
            />
          </div>
          <h2 className="item-list-title">Item List</h2>
          <div className="item-list-container">
            <div className="input-group">
              <label className="item-name" id="item-name" htmlFor="item-name">
                Item Name
              </label>
              <input
                className="item-name"
                name="item-name"
                placeholder="Email Design"
              />
            </div>
            <div className="item-qty-group">
              <div className="input-group">
                <label className="item-qty" id="item-qty" htmlFor="item-qty">
                  Qty
                </label>
                <input
                  className="item-qty"
                  name="item-qty"
                  placeholder="Email Design"
                />
              </div>
              <div className="input-group">
                <label
                  className="item-price"
                  id="item-price"
                  htmlFor="item-price"
                >
                  Price
                </label>
                <input
                  className="item-price"
                  name="item-price"
                  placeholder="Email Design"
                />
              </div>
              <div className="total-group">
                <span className="total">Total</span>
                <span>400.00</span>
              </div>
              <div className="delete">
                <button className="delete-btn">
                  <svg
                    width="13"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                      fill="#888EB0"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button class="add-item-btn">
          <icon class="plus-icon">+</icon>
          Add New Item
        </button>
      </form>
      <section className="actions-group">
        <button
          type="button"
          aria-label="discard button"
          className="discard-btn"
        >
          Discard
        </button>
        <div className="btn-group">
          <button
            type="button"
            aria-label="Save in the draft button"
            className="save-as-draft-btn"
          >
            Save as Draft
          </button>
          <button
            type="button"
            aria-label="save and send button"
            className="save-and-send-btn"
          >
            Save & Send
          </button>
        </div>
      </section>
    </aside>
  );
}
