import React from "react";
import "./CartCard.css";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
export const CartCard = ({product}) => {
  const {id, name, price, image} = product;
  const dispatch = useDispatch();
  return (
    <div className="cartCard">
      <img src={image} alt={id} />
      <p className="productName">{name}</p>
      <div className="productPrice">{price}</div>
      <button onClick={()=> dispatch(remove(product)) }>Remove</button>
    </div>
  )
}
