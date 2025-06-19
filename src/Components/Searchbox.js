import React from "react";
import "../styles/Navbar.css";
import { useContext } from "react";
import Store from "../Store/Store";

function Searchbox() {
  const { searchItem, on1, off1 } = useContext(Store);

  // function Searching(e) {
  //   off1(e.target.value);
  // }
  return (
    <div>
      <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          // onChange={Searching}
          // value={on1}
          ref={searchItem}
          type="text"
          className="form-control search"
          placeholder="Search for products brands and more...."
          aria-label="Search"
        />
      </div>
    </div>
  );
}

export default Searchbox;
