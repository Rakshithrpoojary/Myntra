import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provide } from "../src/Store/Store";
import reportWebVitals from "./reportWebVitals";
import Wishlist from "./Components/Wishlist";
import Home from "./Components/Home";
import PlaceOrder from "./Components/PlaceOrder";
import Address from "./Components/Address";
import AddressDisplay from "./Components/AddressDisplay";
import Payment from "./Components/Payment";
import Searchbox from "./Components/Searchbox";
import Header from "./Components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provide>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/bag" element={<PlaceOrder />} />
          <Route path="/address" element={<Address />} />
          <Route path="/addressdisplay" element={<AddressDisplay />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/search" element={<Searchbox />} />
          <Route path="/Header" element={<Header />} />
        </Routes>
      </Provide>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
