import React from "react";
import Bagnavbar from "./Bagnavbar";
import "../styles/Address.css";
import Store from "../Store/Store";
import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Address() {
  const { setHoveredItemId2, on, off, yes, no } = useContext(Store);
  const a = useRef();
  const b = useRef();
  const c = useRef();
  const d = useRef();
  const w = useRef();
  const f = useRef();
  const g = useRef();

  const display = useNavigate();

  function SubmitAddress(e) {
    e.preventDefault();
    setHoveredItemId2({
      type: "SUBMIT",
      payload: {
        ref1: a.current.value,
        ref2: b.current.value,
        ref3: c.current.value,
        ref4: d.current.value,
        ref5: w.current.value,
        ref6: f.current.value,
        ref7: g.current.value,
        ref8: "",
        ref9: yes,
        ref10: no,
      },
    });
    a.current.value = "";
    b.current.value = "";
    c.current.value = "";
    d.current.value = "";
    w.current.value = "";
    f.current.value = "";
    g.current.value = "";
    no(!yes);
    display("/addressdisplay");
  }
  function Change() {
    no(!yes);
  }
  return (
    <div>
      <Bagnavbar />
      <form onSubmit={SubmitAddress} className="address-container">
        <h3 className="new-address">Add a new address</h3>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label name">
            Name
          </label>
          <input
            required
            ref={b}
            className="form-control"
            id="exampleFormControlInput1"
          />
          <label for="exampleFormControlInput1" className="form-label name">
            Locality/town
          </label>
          <input
            required
            ref={c}
            className="form-control"
            id="exampleFormControlInput1"
          />
          <label for="exampleFormControlInput1" className="form-label name3">
            City/District
            <select required ref={d} className="dropdown">
              <option>Select</option>
              <option>Udupi</option>
              <option>Dakshina Kannda</option>
              <option>Mysore</option>
            </select>
          </label>
          <label for="exampleFormControlInput1" className="form-label name3 ">
            State
            <select required className="dropdown" ref={w}>
              <option> Select </option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Tamilnadu</option>
            </select>
          </label>
          <label for="exampleFormControlInput1" className="form-label name">
            Pincode
          </label>
          <input
            required
            ref={a}
            className="form-control"
            id="exampleFormControlInput1"
          />
          <label for="exampleFormControlInput1" className="form-label name">
            Mobile Number
          </label>
          <input
            required
            ref={f}
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label name">
            Address
          </label>
          <textarea
            ref={g}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <label>
          <input type="checkbox" onChange={Change} />
          Make this my default address
        </label>
        <button type="submit" className="btn btn-success go-down">
          Save
        </button>
      </form>
    </div>
  );
}

export default Address;
