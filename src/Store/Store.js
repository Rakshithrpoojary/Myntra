// import { createContext, useReducer, useState } from "react";
// import data from "../Store/items.json";

// const Store = createContext();

// export default Store;

// export function Provide({ children }) {
//   const reducer = (state, action) => {
//     if (action.type == "OVER") {
//       const moveTobag = data.items.filter(
//         (op) => op.id === action.payload.number
//       );
//       action.payload.number2((prevItems) => [...prevItems, moveTobag]);
//       action.payload.number3(true);
//     }
//     return state;
//   };
//   const [hoveredItemId1, setHoveredItemId1] = useState([]);
//   const [hoveredItemId2, setHoveredItemId2] = useReducer(reducer, "");

//   return (
//     <Store.Provider
//       value={{ hoveredItemId1, setHoveredItemId1, setHoveredItemId2 }}
//     >
//       {children}
//     </Store.Provider>
//   );
// }
import { createContext, useReducer, useRef, useState } from "react";
import data from "../Store/items.json";

const Store = createContext();

export default Store;

export function Provide({ children }) {
  const reducer = (state, action) => {
    if (action.type === "OVER") {
      const moveTobag = data.items.filter(
        (op) => op.id === action.payload.number
      );
      action.payload.number2(moveTobag);
      action.payload.number4((place) => [...place, moveTobag]);
      action.payload.number3(true);
    } else if (action.type === "DELETE") {
      const updatedItems = action.payload.one.map((op) =>
        op.filter((os) => os.id !== action.payload.three)
      );

      action.payload.two(updatedItems);
    } else if (action.type === "ORDER_DELETE") {
      const d = action.payload.five.map((od) =>
        od.filter((og) => og.id !== action.payload.four)
      );
      action.payload.seven(action.payload.eight - 1);
      action.payload.six(d);
    } else if (action.type === "SUBMIT") {
      if (action.payload.ref9) {
        const updatedState = state.map((item) => ({
          ...item,
          ref8: "",
        }));
        const newItem = { ...action.payload, ref8: "Default address" };
        return [newItem, ...updatedState];
      } else {
        const updatedState = state.map((item) => ({
          ...item,
          ref8: item.ref8,
        }));
        const newItems = { ...action.payload, ref8: action.payload.ref8 };
        action.payload.ref10(false);
        return [newItems, ...updatedState];
      }
    } else if (action.type === "DELETEADDRESS") {
      const y = state.filter((op, index) => index !== action.payload.address);
      return y;
    }

    return state;
  };

  const [hoveredItemId1, setHoveredItemId1] = useState([]);
  const [hoveredItemId2, setHoveredItemId2] = useReducer(reducer, []);

  const [set, reset] = useState();
  const [set1, reset1] = useState([]);
  const [set2, reset2] = useState(0);
  const [yes, no] = useState(false);
  const [on, off] = useState("");
  const [localItems, setLocalItems] = useState(data.items);
  const [set3, reset3] = useState([]);
  const searchItem = useRef("");
  const [on1, off1] = useState();

  return (
    <Store.Provider
      value={{
        localItems,
        setLocalItems,
        hoveredItemId1,
        setHoveredItemId1,
        setHoveredItemId2,
        hoveredItemId2,
        set,
        reset,
        set1,
        reset1,
        set2,
        reset2,
        yes,
        no,
        on,
        off,
        searchItem,
        reset3,
        on1,
        off1,
      }}
    >
      {children}
    </Store.Provider>
  );
}
