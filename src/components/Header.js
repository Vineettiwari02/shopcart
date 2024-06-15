import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg"
import {Link, NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const products = useSelector( state => state.cartState.cartList);
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
    <span>Cart: {products.length}</span>
    </Link>
  </header>
  )
}
