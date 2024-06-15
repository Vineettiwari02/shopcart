import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { add, remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartlist = useSelector(state => state.cartState.cartList)
  const {id, name, price, image} = product;
  const [isInCart, setIsInCart] = useState(false)
  useEffect( () =>{
    const productInCart = cartlist.find(item => item.id === product.id);
    if(productInCart){
      setIsInCart(true)
    }else{
      setIsInCart(false)
    }
  },[cartlist, id] )
  return (
   <div className="productCard">

    <img src={image} alt={id} />
    <p className="name">{name}</p>
    <div className="action">
      <p>${price}</p>
      {isInCart ?  (<button className="remove"  onClick={ ()=> dispatch(remove(product))}>Remove</button>)  : (<button  onClick={ ()=> dispatch(add(product))}>Add To Cart</button>)  }
      
    </div>


   </div>
  )
}
