import React, { useEffect, useState } from "react";
import "./styles.css";
import Product from "../..";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const filterResult = (categoryItem) => {
    const result = Product.filter((products)=>{
      return products.category === categoryItem;
    });
    setCategory(result);
  }

  return (
    <div className="category__container">
      <label for="cars">Choose a category:</label>
      <select name="cars" id="cars">
        {category?.map((item) => {
          return <option 
          value={item}
          // onClick={()=>filterResult(item)}
          >{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Categories;
