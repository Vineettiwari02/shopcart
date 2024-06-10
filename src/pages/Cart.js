import React from 'react';
import {useCart} from '../context/CardContext'
import { CartCard } from '../components';
import { useTitle } from '../hooks/useTitle';
export const Cart = () => {
  const { total, cartList } = useCart();
  useTitle("Cart");
 
  return (
   <main>
    <section className="cart">
      <h1 className=''>Cart Items: {cartList.length} / ${total}</h1>
      {cartList.map((product) => (
        <CartCard product={product} key={product.id}/>
      ))}
      
    </section>
   </main>
  )
}
