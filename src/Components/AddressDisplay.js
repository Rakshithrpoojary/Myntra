import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Store from "../Store/Store";
import Bagnavbar from "./Bagnavbar";
import "../styles/Addressdisplay.css";
import { MdDelete } from "react-icons/md";

function AddressDisplay() {
  const [view, noview] = useState(null);
  const [view1, noview1] = useState(false);

  const Adnav = useNavigate();
  const Adnav1 = useNavigate();

  const { hoveredItemId2, setHoveredItemId2 } = useContext(Store);

  function Temp(index) {
    noview(index);
    noview1(true);
  }

  return (
    <div>
      <Bagnavbar />
      {hoveredItemId2 == 0 ? (
        <>
          <h1 className="firstaddress">Add your first address</h1>
          <button
            onClick={() => Adnav1("/address")}
            className="btn btn-danger adress-btn"
          >
            Address
          </button>
        </>
      ) : (
        <>
          <h4 className="select-address">Select your address</h4>
          <button
            onClick={() => Adnav("/address")}
            type="button"
            className="btn btn-light address-icon"
          >
            Create new
          </button>

          {hoveredItemId2.map((op, index) => (
            <button
              onClick={() => Temp(index)}
              className={
                index === view
                  ? "Addressdisplay-container-one"
                  : "Addressdisplay-container"
              }
            >
              <p className="ref1">{op.ref8}</p>
              <button
                onClick={() =>
                  setHoveredItemId2({
                    type: "DELETEADDRESS",
                    payload: {
                      address: index,
                    },
                  })
                }
                className="delete"
              >
                <MdDelete />
              </button>
              <div className="card w-75 add">
                <div className="card-body">
                  <h5 className="card-title">Address</h5>
                  <span className="card-text all">
                    <p className="ref">{op.ref2},</p>
                    <p className="ref">{op.ref3}</p>
                    <p className="ref">{op.ref4}</p>
                    <p className="ref">{op.ref1}</p>
                    <p className="ref">{op.ref5}</p>
                    <p className="ref">{op.ref6}</p>
                    <p className="ref">{op.ref7}</p>
                  </span>
                </div>
              </div>
            </button>
          ))}
          {view1 && (
            <Link
              to="/payment"
              type="button"
              className="btn btn-primary payment-btn"
            >
              Proceed
            </Link>
          )}
        </>
      )}
    </div>
  );
}

export default AddressDisplay;
