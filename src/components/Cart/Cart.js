import React, { useContext } from "react";
import "./Cart.css";
import ContextOfPro from "../../contexts/ContextOfPro";

function Cart() {
  const {
    productsCart,
    setProductsCart,
    countCart,
    setCountCart,
    TotalPrice,
    setTotalPrice,
  } = useContext(ContextOfPro);

  function RemoveProduct(item) {
    setProductsCart(productsCart.filter((product) => product != item));
    setCountCart(countCart - 1);
    setTotalPrice(TotalPrice - (item.price * item.amount).toFixed(2)).toFixed(
      2
    );
  }

  function handleRemove(item) {
    const found = productsCart.find((product) => product.id === item.id);
    if (found) {
      if (found.amount > 1)
        setProductsCart(
          productsCart.map((product) =>
            product.id === found.id
              ? { ...product, amount: product.amount - 1 }
              : product
          )
        );
      else RemoveProduct(item);
      setTotalPrice(TotalPrice - item.price).toFixed(2);
    }
  }

  function handleAdd(item) {
    const found = productsCart.find((product) => product.id === item.id);
    console.log(found);
    if (found) {
      setProductsCart(
        productsCart.map((product) =>
          product.id === found.id
            ? { ...product, amount: product.amount + 1 }
            : product
        )
      );
    }
    setTotalPrice(TotalPrice + item.price).toFixed(2);
  }

  return (
    <div className="cart">
      <h1>YOUR CART</h1>
      {productsCart.map((item) => {
        return (
          <div className="cart-card">
            <img src={item.image}></img>
            <div>
              <h2 id="title">{item.title}</h2>
              <h3>for 1 k.g : {item.price} $</h3>
            </div>
            <div className="box-buttons">
              <button onClick={() => handleRemove(item)}>-</button>
              <button>{item.amount}</button>
              <button onClick={() => handleAdd(item)}>+</button>
            </div>
            <h2>
              Price for {item.amount} k.g :{" "}
              {(item.price * item.amount).toFixed(2)} $
            </h2>
            <button className="btn" onClick={() => RemoveProduct(item)}>
              Remove
            </button>
          </div>
        );
      })}
      <h1>Total Price: {TotalPrice.toFixed(2)} $</h1>
    </div>
  );
}

export default Cart;
