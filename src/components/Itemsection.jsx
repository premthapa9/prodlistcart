import React from "react";
import { mydata } from "../data";
import SingleItem from "./SingleItem";
const Itemsection = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-5">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {mydata.length > 0 &&
          mydata.map((el, index) => <SingleItem key={index} {...el} />)}
      </div>
    </div>
  );
};

export default Itemsection;
