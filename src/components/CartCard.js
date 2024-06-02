import React from "react";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const {id, name, price, image} = product;
  return (
    <div className="cartCard">
      <img src={image} alt={id} />
      <p className="productName">{name}</p>
      <div className="productPrice">{price}</div>
      <button>Remove</button>
    </div>
  )
}
