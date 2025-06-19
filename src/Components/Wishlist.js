// import React from "react";
// import { useContext } from "react";
// import { FaStar } from "react-icons/fa";
// import Store from "../Store/Store";
// import "../styles/Home.css";

// function Wishlist() {
//   const { hoveredItemId1 } = useContext(Store);
//   console.log(hoveredItemId1);
//   return (
//     <div>
//       {hoveredItemId1 === 0 ? (
//         <h1>No items</h1>
//       ) : (
//         hoveredItemId1.map((item) => {
//           return (
//             <div className="display" key={item.id}>
//               <div className="card individual-card">
//                 <img src={item.image} className="card-img-top" alt="..." />

//                 <span className="rating">
//                   {/* <p className="rating1">{item.rating.stars}</p> */}
//                   <p className="star">
//                     <FaStar />
//                   </p>
//                   {/* |<p className="rating2">{item.rating.count}</p> */}
//                 </span>

//                 <div className="card-body">
//                   <h5 className="card-title">{item.company}</h5>
//                   <p className="card-text item_name">{item.item_name}</p>
//                 </div>

//                 <ul className="list-group list-group-flush price">
//                   <p className="item1">Rs.{item.current_price}</p>
//                   <p className="item2">Rs.{item.current_price}</p>
//                   <p className="item3">({item.current_price})% OFF</p>
//                 </ul>

//                 <div className="card-body">
//                   <a href="#" className="card-link">
//                     Card link
//                   </a>
//                   <a href="#" className="card-link">
//                     Another link
//                   </a>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// }

// export default Wishlist;
import React from "react";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import Store from "../Store/Store";
import "../styles/Home.css";
import "../styles/Wishlist.css";
import Model from "../Components/Model";
import { Link } from "react-router-dom";

function Wishlist() {
  const [yes, no] = useState(false);
  const {
    hoveredItemId1,
    setHoveredItemId1,
    setHoveredItemId2,
    set,
    reset,
    set2,
    reset2,
    reset1,
  } = useContext(Store);
  return (
    <>
      {hoveredItemId1.flatMap((op) => op.map((os) => os)) == 0 ? (
        <div>
          <div className="wishes">
            <h1 className="no">Wishlist is empty</h1>
            <Link to="/" className="name-btn">
              Add items to wishlist
            </Link>
          </div>
        </div>
      ) : (
        hoveredItemId1.map((innerArray, index) => {
          return (
            <div className={yes == true ? "black" : "one"} key={index}>
              {innerArray.map((item) => (
                <div className="displayi" key={item.id}>
                  <div className="card individual-cardi">
                    <button
                      onClick={() =>
                        setHoveredItemId2({
                          type: "DELETE",
                          payload: {
                            one: hoveredItemId1,
                            two: setHoveredItemId1,
                            three: item.id,
                          },
                        })
                      }
                      type="button"
                      className="close cross"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <img src={item.image} className="card-img-top" alt="..." />

                    <span className="ratings">
                      <p className="rating1">{item.rating.stars}</p>
                      <p className="star">
                        <FaStar />
                      </p>
                      |<p className="rating2">{item.rating.count}</p>
                    </span>

                    <div className="card-body">
                      <h5 className="card-title">{item.company}</h5>
                      <p className="card-text item_name">{item.item_name}</p>
                    </div>

                    <ul className="list-group price">
                      <p className="item1">Rs.{item.current_price}</p>
                      <p className="item2">Rs.{item.original_price}</p>
                      <p className="item3">({item.discount_percentage})% OFF</p>
                    </ul>

                    <div className="card-body">
                      <button
                        onClick={() =>
                          setHoveredItemId2({
                            type: "OVER",
                            payload: {
                              number2: reset,
                              number: item.id,
                              number3: no,
                              number4: reset1,
                            },
                          })
                        }
                        className="card-link bag"
                      >
                        MOVE TO BAG
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })
      )}
      {yes && <Model send={set} no={no} reset2={reset2} set2={set2} />}
    </>
  );
}

export default Wishlist;
