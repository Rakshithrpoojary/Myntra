import React from "react";
import "../styles/Payment.css";
import Bagnavbar from "./Bagnavbar";
import { SiPhonepe } from "react-icons/si";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

function Payment() {
  return (
    <>
      <Bagnavbar />
      <div className="payment-container">
        <h3 className="suggest">Suggested for you</h3>
        <div className="card">
          <ul className="list-group list-group-flush two">
            <li className="list-group-item three1">
              Phonepe/Bhim UPI
              <p className="fles1">
                <SiPhonepe />
              </p>
            </li>
            <li className="list-group-item three2">
              Credit card/debit card
              <p className="fles2">
                <BsFillCreditCard2FrontFill />
              </p>
            </li>
            <li className="list-group-item three">
              Cash on delivery
              <p className="fles3">
                <CiDeliveryTruck />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Payment;
