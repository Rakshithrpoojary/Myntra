// import React from "react";

// function Model({ send }) {
//   return (
//     <div>
//       <div className="modal-body">
//         {send.map((op) => (
//           <span>
//             <img src={op.image} className="image" />
//             <p>{op.company}</p>
//             <p>{op.item_name}</p>
//           </span>
//         ))}

//         <hr />
//         <h2 className="fs-5">Tooltips in a modal</h2>
//         <p>
//           <a href="#" data-bs-toggle="tooltip" title="Tooltip">
//             This link
//           </a>
//           and
//           <a href="#" data-bs-toggle="tooltip" title="Tooltip">
//             that link
//           </a>
//           have tooltips on hover.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Model;
import React from "react";
import "../styles/Model.css";
import "../styles/Home.css";

function Model({ send, no, reset2, set2 }) {
  function news() {
    no(false);
    reset2(set2 + 1);
  }
  return (
    <div className="modal-body model-container">
      {send.map((innerArray, index) => (
        <div key={index}>
          <div className="overlay" key={innerArray.id}>
            <img
              src={innerArray.image}
              className="image"
              alt={innerArray.company}
            />
            <p className="company">{innerArray.company}</p>
            <p className="item-name">{innerArray.item_name}</p>
            <ul className="list-group list-group-flush modelprices">
              <p className="item1">Rs.{innerArray.current_price}</p>
              <p className="item2">Rs.{innerArray.original_price}</p>
              <p className="item3">{innerArray.discount_percentage}%OFF</p>
            </ul>
          </div>
        </div>
      ))}
      <hr />
      <button
        onClick={() => news()}
        type="button"
        class="btn btn-danger model-btn"
      >
        Done
      </button>
    </div>
  );
}

export default Model;
