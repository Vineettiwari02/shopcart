import React from "react";
import "./ProductCard.css"

export const ProductCard = ({product}) => {
  const {id, name, price, image} = product;
  return (
   <div className="productCard">

    <img src={image} alt={id} />
    <p className="name">{name}</p>
    <div className="action">
      <p>${price}</p>
      <button>Add To Cart</button>
    </div>


   </div>
  )
}
