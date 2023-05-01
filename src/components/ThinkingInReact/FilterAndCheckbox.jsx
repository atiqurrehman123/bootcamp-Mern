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

const FilterAndCheckbox = ({ fruiteveg }) => {
  const [frutiesVegValue, setFruitesVegValue] = useState("");
  const [list, setList] = useState(fruitesVeglist);
  const [filteredArray, setFilteredArray] = useState(list);
  const [inStock, setInStock] = useState(false);

  const setFilterarray = (e) => {
    
    const filteredarray=list.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredArray(filteredarray);
      setFruitesVegValue(e.target.value)
  }
  const SearchInStock=(instock)=>{
        setInStock(instock);
    if(instock){
    const filteredarray = filteredArray.filter((item) =>
      item.stocked);
    setFilteredArray(filteredarray);
    }else{
        setFilteredArray(list);
    }
  }
  console.log(inStock,"instock")
  return (
    <div>
      <div>
        {/* filter for searching records in the array list */}
        <input value={frutiesVegValue} onChange={setFilterarray} />
        {/* checkbox for toggling inStock items in array list */}
        <input type="checkbox" value={inStock} onChange={(e)=>{SearchInStock(e.target.checked);}}/>
        only show those products in Stock
        <h1>Search List</h1>
        {filteredArray.map((listdata)=>{
            return <p>{listdata.name}</p>
        })}
      </div>
    </div>
  );
};

export default FilterAndCheckbox;
