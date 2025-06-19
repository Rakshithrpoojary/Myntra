import React, { useState, useEffect } from "react";
import "../styles/Price.css";
import { Link } from "react-router-dom";

function Price({ set1 }) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const d = set1.flatMap((op) => op.map((od) => od.current_price));
    const totalPrice = d.reduce((acc, current) => acc + parseInt(current), 0);
    setPrice(totalPrice);
  }, [set1]);

  return (
    <div>
      <div className="card price-container">
        <div className="card-body">
          <h5 className="card-title price-title">Price Details</h5>
          <p className="card-text">
            <p className="discount1">Total MRP</p>
            <p className="zero1">Rs.{price}</p>
          </p>
          <p className="card-text">
            <p className="discount2">Myntra Discount</p>
            <p className="zero2">-0</p>
          </p>
          <p className="card-text">
            <p className="discount3">Convienence fee</p>
            <p className="zero3">99</p>
            <p className="zero5">Free</p>
          </p>
          <hr />
          <p className="card-text">
            <p className="discount4">Total Amount</p>
            <p className="zero4">Rs.{price}</p>
          </p>
          <Link to="/addressdisplay" className="btn btn-danger orders-btn">
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Price;
