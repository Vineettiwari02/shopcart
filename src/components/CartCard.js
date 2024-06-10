import React from "react";
import "./CartCard.css";
import { useCart } from "../context/CardContext";

export const CartCard = ({product}) => {
  const{ removeFromCart} = useCart();
  const {id, name, price, image} = product;
  return (
    <div className="cartCard">
      <img src={image} alt={id} />
      <p className="productName">{name}</p>
      <div className="productPrice">{price}</div>
      <button onClick={()=>removeFromCart(product)}>Remove</button>
    </div>
  )
}
