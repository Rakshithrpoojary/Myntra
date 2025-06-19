import React from "react";
import "../styles/Bagnavbar.css";
import { Link, NavLink } from "react-router-dom";

function Bagnavbar() {
  return (
    <div>
      <div className="nav-container ">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-white fixed-top">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img className="bagimage" src="/images/myntra_logo.webp" />
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 bag-nav">
            <li>
              <NavLink
                to="/bag"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2  bags active"
                    : "nav-link px-2 link-secondary bags"
                }
              >
                BAG
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addressdisplay"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2  bags active"
                    : "nav-link px-2 link-secondary bags"
                }
              >
                ADRESS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payment"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2  bags active"
                    : "nav-link px-2 link-secondary bags"
                }
              >
                PAYMENT
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Bagnavbar;
