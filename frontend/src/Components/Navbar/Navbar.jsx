import React, { useContext, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import hamberger_menu from "../Assets/hamberg_menu.png";

export const Navbar = () => {
  //useState to set the menu bar
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="StyleSnap-logo" />
        <p>StyleSnap</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={hamberger_menu}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            Men{" "}
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link
            to="/women"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Women
          </Link>{" "}
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link to="kids" style={{ textDecoration: "none", color: "inherit" }}>
            Kids
          </Link>{" "}
          {menu === "kid" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Log-Out
          </button>
        ) : (
          <Link
            to="/Login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <button> LogIn</button>
          </Link>
        )}
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="nav-cart-icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
};
