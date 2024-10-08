import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/logo.png";
import navProfile from "../../assets/profile_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <h4>StyleSnap admin Panel</h4>
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
