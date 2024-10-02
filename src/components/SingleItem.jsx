import React, { useEffect, useState } from "react";
import Cart from "../assets/images/icon-add-to-cart.svg";
import Dec from "../assets/images/icon-decrement-quantity.svg";
import Inc from "../assets/images/icon-increment-quantity.svg";
import { GlobalCart } from "../cartContext";

const SingleItem = ({
  id,
  name,
  category,
  price,
  image: { thumbnail, mobile, tablet, desktop },
}) => {
  const { state, dispatch } = GlobalCart();
  const getCountval = (id) => {
    const item = state.cartinfo.find((el) => el.id === id);

    return item?.num;
  };
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(getCountval(id));

  useEffect(() => {
    setCount(getCountval(id));
  }, [state]);

  return (
    <div className="">
      <div className="relative">
        <img
          src={mobile}
          alt=""
          className={`rounded-lg ${
            active && count > 0
              ? "border-mRed border-2"
              : "border-2 border-transparent"
          } `}
        />
        <button
          className="absolute -bottom-5 min-w-32 rounded-lg  bg-mRose50 px-2 py-1 z-10   left-1/2 -translate-x-1/2 "
          style={{ backgroundColor: active && count > 0 ? "orange" : "" }}
        >
          {active && count > 0 ? (
            <div className="flex items-center gap-5 justify-center">
              <div
                className="border h-4 w-4 flex justify-center items-center rounded-full border-white"
                onClick={() => {
                  if (count === 1) {
                    dispatch({ type: "REMOVE", payload: id });
                  } else {
                    dispatch({ type: "DECE", payload: { id, price } });
                  }
                  setCount((prev) => prev - 1);
                }}
              >
                <img src={Dec} alt="" className="" />
              </div>
              <p>{count}</p>
              <div
                onClick={() => {
                  setCount((prev) => prev + 1);
                  dispatch({ type: "INCRE", payload: { id, price } });
                }}
                className=" border h-4 w-4 flex justify-center items-center rounded-full"
              >
                <img src={Inc} alt="" />
              </div>
            </div>
          ) : (
            <div
              className="flex items-center justify-between"
              onClick={() => {
                setActive(true);
                setCount((prev) => prev + 1);
                dispatch({
                  type: "ADD",
                  payload: {
                    name,
                    category,
                    price,
                    img: mobile,
                    num: 1,
                    id,
                  },
                });
              }}
            >
              <img src={Cart} alt="" /> Add to cart
            </div>
          )}
        </button>
      </div>
      <div className="mt-5">
        <p className="text-gray-500">{category}</p>
        <h2 className="font-bold text-gray-400">{name}</h2>
        <h3 className="text-mRed font-bold">${price}</h3>
      </div>
    </div>
  );
};

export default SingleItem;
