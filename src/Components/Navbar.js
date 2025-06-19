import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav_container">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 active"
                  : "nav-link px-2 link-secondary "
              }
            >
              men
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 active"
                  : "nav-link px-2 link-secondary"
              }
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 active"
                  : "nav-link px-2 link-secondary"
              }
            >
              kids
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 active"
                  : "nav-link px-2 link-secondary"
              }
            >
              Home living
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 active"
                  : "nav-link px-2 link-secondary"
              }
            >
              Beauty
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 active"
                  : "nav-link px-2 link-secondary"
              }
            >
              Studio<sup className="sup">new</sup>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
