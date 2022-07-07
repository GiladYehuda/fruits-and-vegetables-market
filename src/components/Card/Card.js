import React from "react";
import "./Card.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image}></img>
      <div className="card-body">
        <h2>{props.title}</h2>
        <h2>{props.price}</h2>
        <Button variant="contained" color="success">
          Add to Cart<ShoppingCartIcon></ShoppingCartIcon>
        </Button>
      </div>
    </div>
  );
}

export default Card;
