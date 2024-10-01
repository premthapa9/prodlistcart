import React from "react";
import Remove from "../assets/images/icon-remove-item.svg";
import { GlobalCart } from "../cartContext";
const SingleCart = ({ id, name, num, price }) => {
  const { dispatch } = GlobalCart();
  return (
    <div className="flex items-center justify-between border-b-2 pb-2">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">{name}</p>
        <div className="flex gap-3">
          <span className="text-mRed">{num}x</span>
          <span className="text-mRose300">@{price / num}</span>
          <span className="text-mRose500">${price}</span>
        </div>
      </div>
      <div
        className="flex justify-center items-center h-4 w-4 rounded-full border cursor-pointer"
        onClick={() => dispatch({ type: "REMOVE", payload: id })}
      >
        <img src={Remove} alt="" />
      </div>
    </div>
  );
};

export default SingleCart;
