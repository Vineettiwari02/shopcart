import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg"
import {Link, NavLink} from "react-router-dom";
import { useCart } from "../context/CardContext";

export const Header = () => {
  const {cartList} = useCart();
  return (
  <header>
    <Link to="/" className="logodesign">
    <img className="loginControl" src={logo} alt="logo" />
      ShopCart
    </Link>
    <nav className="navigation">
      <NavLink to ="/" className="link" end>Home</NavLink>
      <NavLink to ="/cart" className="link">Cart</NavLink>
    </nav>
    <Link to="/cart" className="items">
    <span>Cart: {cartList.length}</span>
    </Link>
  </header>
  )
}
