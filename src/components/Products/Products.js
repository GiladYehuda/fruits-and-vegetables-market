import React from "react";
import "./Products.css";
import Card from "../Card/Card";

function Products(props) {
  props.setIsFilter(false);
  return (
    <div className="shop">
      {props.newproducts.map((item) => {
        return (
          <Card
            key={item.image}
            title={item.title}
            image={item.image}
            price={item.price}
          ></Card>
        );
      })}
    </div>
  );
}

export default Products;
