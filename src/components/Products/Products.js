import React from "react";
import "./Products.css";
import Card from "../Card/Card";

function Products(props) {
  props.setIsFilter(false);
  return (
    <div className="productss">
      <h1>*All the prices for 1 k.g*</h1>
      <div className="shop">
        {props.newproducts.map((item) => {
          return (
            <Card
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              category={item.category}
              leaves={item.leaves}
              amount={item.amount}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
