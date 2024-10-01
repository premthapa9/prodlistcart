import React from "react";
import Cart from "../assets/images/illustration-empty-cart.svg";
import { GlobalCart } from "../cartContext";
import SingleCart from "./SingleCart";
import Carbon from "../assets/images/icon-carbon-neutral.svg";
const Cartsection = () => {
  const {
    state: { cartinfo },
  } = GlobalCart();

  return (
    <div className="my-5 p-5  rounded-lg bg-mRose50">
      <h1 className="font-bold text-mRed text-3xl mb-3">
        Your Cart ({cartinfo.reduce((acc, curr) => acc + curr.num, 0)})
      </h1>
      {cartinfo?.length > 0 ? (
        <div className="space-y-6">
          {cartinfo.map((item) => (
            <SingleCart key={item.id} {...item} />
          ))}
          <div className="flex justify-between items-center ">
            <p>Order Total</p>
            <p className="text-2xl font-bold">
              ${cartinfo.reduce((acc, curr) => acc + curr.price, 0)}
            </p>
          </div>
          <div className="p-2 my-4 flex justify-center rounded-lg bg-mRose300 items-center gap-1">
            <img src={Carbon} alt="" />
            <p className="text-sm">
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button className="w-full p-3 bg-mRed text-white font-bold rounded-full">
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-1">
          <img src={Cart} alt="" />
          <p>You added item will apper here</p>
        </div>
      )}
    </div>
  );
};

export default Cartsection;
