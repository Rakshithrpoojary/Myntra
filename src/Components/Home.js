import React, { useState, useContext } from "react";
import data from "../Store/items.json";
import Store from "../Store/Store";
import "../styles/Home.css";
import { FaStar, FaHeart } from "react-icons/fa";

function Home() {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const { setHoveredItemId1, localItems, setLocalItems } = useContext(Store);

  function handleMouseEnter(id) {
    setHoveredItemId(id);
  }

  function handleMouseLeave() {
    setHoveredItemId(null);
  }

  function Temp(id) {
    const wishlisteditems = localItems.filter((op) => op.id === id);
    setHoveredItemId1((prevItems) => [...prevItems, wishlisteditems]);
    const updatedItems = localItems.map((op) => {
      if (op.id === id) {
        return { ...op, button: "Wishlisted" };
      }
      return op;
    });

    setLocalItems(updatedItems);
  }

  return (
    <>
      {localItems.map((item) => {
        const isHovered = item.id === hoveredItemId;

        return (
          <div className="display" key={item.id}>
            <div
              className="card individual-card"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={item.image} className="card-img-top" alt="..." />

              {isHovered && (
                <button
                  disabled={item.button == "Wishlisted"}
                  onClick={() => Temp(item.id)}
                  className={item.button}
                >
                  {item.button}
                  <p className="heart">
                    <FaHeart />
                  </p>
                </button>
              )}

              <span className="rating">
                <p className="rating1">{item.rating.stars}</p>
                <p className="star">
                  <FaStar />
                </p>
                |<p className="rating2">{item.rating.count}</p>
              </span>

              <div className="card-body body">
                <h5 className="card-title">{item.company}</h5>
                <p className="card-text item_name">{item.item_name}</p>
              </div>

              <ul className="list-group price">
                <p className="item1">Rs.{item.current_price}</p>
                <p className="item2">Rs.{item.original_price}</p>
                <p className="item3">({item.discount_percentage})% OFF</p>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;
