import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import Searchbox from "./Searchbox";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Store from "../Store/Store";
import data from "../Store/items.json";

function Header({ set2 }) {
  const { searchItem, setLocalItems, localItems, reset3, on1, off1 } =
    useContext(Store);

  // useEffect(() => {
  //   function search() {
  //     const filteredItems = data.items.filter(
  //       (item, index) =>
  //         item.company.slice(0, 3).toUpperCase() ===
  //         searchItem.current.value.slice(0, 3).toUpperCase()
  //     );

  //     setLocalItems(filteredItems);
  //   }
  //   search();
  // }, [localItems]);

  return (
    <div>
      <header className="p-3 mb-3 border-bottom fixed-top bg-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <img className="logo" src="images/myntra_logo.webp" alt="loho" />
            </Link>
            <Navbar />
            <button className="search-icon">
              <IoSearchSharp />
            </button>
            <Searchbox />
            <span className="profile_container">
              <Link className="profile">
                Profile
                <p>
                  <CgProfile />
                </p>
              </Link>
              <Link to="/wishlist" className="profile">
                Wishlist
                <p>
                  <CiHeart />
                </p>
              </Link>

              <Link to="/bag" className="profile">
                Bag
                <span className="position-absolute  translate-middle badge rounded-pill bg-danger badge">
                  {set2}
                </span>
                <p>
                  <BsBag />
                </p>
              </Link>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
