import React from "react";
import "./Card.css";
import Button from "@mui/material/Button";
import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContextOfPro from "../../contexts/ContextOfPro";

function Card(props) {
  const {
    productsCart,
    setProductsCart,
    countCart,
    setCountCart,
    TotalPrice,
    setTotalPrice,
  } = useContext(ContextOfPro);

  function addToCart() {
    const product = {
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
      category: props.category,
      leaves: props.leaves,
      amount: props.amount + 1,
    };
    const found = productsCart.find((item) => item.id === props.id);
    if (!found) {
      setProductsCart([...productsCart, product]);
      setCountCart(countCart + 1);
    } else {
      setProductsCart(
        productsCart.map((product) =>
          product.id === found.id
            ? { ...product, amount: product.amount + 1 }
            : product
        )
      );
    }
    setTotalPrice(TotalPrice + props.price);
  }
  return (
    <div className="card">
      <img src={props.image}></img>
      <div className="card-body">
        <h2>{props.title}</h2>
        <h2>{props.price} $</h2>
        <Button variant="contained" color="success" onClick={addToCart}>
          Add to Cart
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
}

export default Card;
