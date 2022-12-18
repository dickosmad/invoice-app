import React from "react";

export default function ViewInvoice() {
  return (
    <div className="view-invoice-container">
      <div className="go-back-container">
        <span className="left-arrow">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </span>
        <button type="button" aria-label="Go back to invoices list">
          Back
        </button>
      </div>
      <div class="view-invoice-btns-container">
        <div class="view-invoice-status">
          <p>Status</p>
          <span className="status pending-status">
            <icon className="dot pending-status-dot"></icon>
            Pending
          </span>
        </div>
        <div class="view-invoice-btns-group">
          <button type="button" aria-label="edit">
            Edit
          </button>
          <button type="button" aria-label="delete button">
            Delete
          </button>
          <button type="button" aria-label="Mark as paid">
            Mark as Paid
          </button>
        </div>
      </div>
      <div className="view-invoice-infos">
        <div className="view-invoice-bill-adress-group">
          <div className="view-invoice-bill-title">
            <p className="invoice-id">
              <span>#</span>RT2123
            </p>
            <p className="invoice-name">Graphisim</p>
          </div>
          <div className="invoice-adress">
            <p class="street">35 Avznue Paris</p>
            <p class="city"> Paris</p>
            <p class="zip">75000</p>
            <p class="Country">France</p>
          </div>
          <div class="view-invoice-bill-infos">
            <div class="view-invoice-bill-date-group">
              <div class="view-invoice-bill-date">
                <h5>Invoice Date</h5>
                <p>20 August 2014</p>
              </div>
              <div class="view-invoice-payment-date">
                <h5>Payment Due</h5>
                <p>20 August 2014</p>
              </div>
            </div>
            <div class="view-invoice-receiver">
              <h5>Bill To</h5>
              <p class="street">35 Avznue Paris</p>
              <p class="city"> Paris</p>
              <p class="zip">75000</p>
              <p class="Country">France</p>
            </div>
            <div className="view-invoice-sender">
              <h5>Send To</h5>
              <p class="email">d@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="view-invoice-items">
        <div class="view-invoice-items-header-group">
          <h4>Item Name</h4>
          <h4>QTY</h4>
          <h4>Price</h4>
          <h4>Total</h4>
        </div>
        <div class="view-invoice-items-details">
          <p class="item-name">Graphic Design</p>
          <p class="item-qty">*1</p>
          <p class="item-price">£ 100.00</p>
          <p class="item-total">£ 100.00</p>
        </div>
      </div>
      <div class="view-invoice-total-amount">
        <p>Amount Due</p>
        <p>£ 500.00</p>
      </div>
    </div>
  );
}
