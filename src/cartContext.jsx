import { createContext, useReducer, useContext } from "react";

const CartCont = createContext();

function reducerfun(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, cartinfo: [...state.cartinfo, action.payload] };
    case "REMOVE":
      return {
        ...state,
        cartinfo: state.cartinfo.filter((el) => el.id !== action.payload),
      };
    case "INCRE":
      return {
        ...state,
        cartinfo: state.cartinfo.filter((el) =>
          el.id === action.payload.id
            ? ((el.num = el.num + 1),
              (el.price = action.payload.price * el.num))
            : el.num
        ),
      };
    case "DECE":
      return {
        ...state,
        cartinfo: state.cartinfo.filter((el) =>
          el.id === action.payload.id
            ? ((el.num = el.num - 1),
              (el.price = action.payload.price * el.num))
            : el.num
        ),
      };
    default:
      return state;
  }
}

const MycartCont = ({ children }) => {
  let initialState = {
    cartinfo: [],
  };

  const [state, dispatch] = useReducer(reducerfun, initialState);

  return (
    <CartCont.Provider value={{ state, dispatch }}>
      {children}
    </CartCont.Provider>
  );
};

export const GlobalCart = () => {
  return useContext(CartCont);
};

export default MycartCont;
