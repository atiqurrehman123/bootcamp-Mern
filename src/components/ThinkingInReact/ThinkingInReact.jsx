import React, { useState } from "react";
const fruitesVeglist = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },

  { category: "FruiteVeg", price: "$1", stocked: true, name: "Peas FruiteVeg" },

  { category: "FruiteVeg", price: "$1", stocked: true, name: "Peas FruiteVeg" },
];

const ThinkingInReact = ({ fruiteveg }) => {

  let fruitesVeg = fruitesVeglist.filter(
    (fruites) => fruites.category === fruiteveg
  );

  return (
    <div>
      <div>
        {fruitesVeg.map((fruitesveg,index) => {
          return <p key={index}>{fruitesveg.name}</p>;
        })}
      </div>
    </div>
  );
};

export default ThinkingInReact;
