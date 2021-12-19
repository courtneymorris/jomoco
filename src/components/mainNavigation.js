import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import HeaderLogo from "../images/HeaderLogo.png";

export default function MainNavigation() {
  const [position, setPosition] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      let scrolled = document.documentElement.scrollTop;
      if (scrolled >= 5) {
        setPosition("scrolled");
      } else {
        setPosition("top");
      }
    });
  });

  return (
    <div
      className={
        position === "top"
          ? "main-navigation-wrapper"
          : "main-navigation-wrapper-scrolled"
      }
    >
      <div className="nav-links">
        <div className="nav-links-left">
          <NavLink
            to="/about-us"
            activeClassName="nav-link-active"
            className="nav-link"
          >
            Get to Know Us
          </NavLink>
          <NavLink
            to="/shop-in-person"
            activeClassName="nav-link-active"
            className="nav-link"
          >
            Shop In Person
          </NavLink>
        </div>

        <div className="nav-links-right">
          <h6>Cart</h6>
          <h6>Account</h6>
        </div>
      </div>

      <img src={HeaderLogo} alt="" className="header-logo" />
    </div>
  );
}
