import React from "react";
import Bagnavbar from "./Bagnavbar";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Store from "../Store/Store";
import Price from "./Price";
import "../styles/Bag.css";
import "../styles/Home.css";

function PlaceOrder() {
  const navigate = useNavigate();
  const { set1, setHoveredItemId2, reset1, reset2, set2 } = useContext(Store);
  console.log(set1);

  return (
    <div>
      <Bagnavbar />
      {set1.flatMap((op) => op.map((os) => os)) == 0 ? (
        <>
          <h1 className="empty-bag">Bag is empty</h1>
          <Link to="/" type="button" class="btn btn-success addbag">
            ADD
          </Link>
        </>
      ) : (
        <div className="full-container">
          {set1.flatMap((op) => {
            return op.map((os) => (
              <div
                className="card mb-3 bag-containers"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={os.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{os.company}</h5>
                      <p className="card-text">{os.item_name}</p>
                      <p className="card-text order-price">
                        <p className="item1">Rs.{os.current_price}</p>
                        <p className="item3">{os.discount_percentage} %OFF</p>
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setHoveredItemId2({
                          type: "ORDER_DELETE",
                          payload: {
                            four: os.id,
                            five: set1,
                            six: reset1,
                            seven: reset2,
                            eight: set2,
                          },
                        })
                      }
                      type="button"
                      class="btn btn-danger order-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ));
          })}
        </div>
      )}

      {set1.flatMap((op) => op.map((os) => os)) != 0 && <Price set1={set1} />}
    </div>
  );
}

export default PlaceOrder;
