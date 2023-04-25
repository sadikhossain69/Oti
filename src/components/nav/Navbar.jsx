import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/image/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        <img src={logo} alt="" className="logo" />
        
      </a>
      <ul className={active}>
        <li className="nav__item">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/products">PROJECTS</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
