import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/image/dreamer.png";
import { Link, NavLink } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { useWindowSize } from "@react-hook/window-size";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [width, height] = useWindowSize()


  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition === 0) {
      setNavbarHidden(false);
    } else if (currentScrollPosition > scrollPosition) {
      setNavbarHidden(true);
    } else {
      setNavbarHidden(false);
    }
    // if (currentScrollPosition > scrollPosition) {
    //   setNavbarHidden(true)
    // } else {
    //   setNavbarHidden(false)
    // }
    setScrollPosition(currentScrollPosition);
  };

  return (
    <nav className="nav">
      <Link to={'/'} className="nav__brand">
        <img src={logo} alt="" className="logo" />

      </Link>
      {
        navbarHidden ?
          <ul className={''}>
            <li className="nav_hidden">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="nav_hidden">
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li className="nav_hidden">
              <NavLink to="/properties">Properties</NavLink>
            </li>
            <li className="nav_hidden">
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
          :
          <>
            <ul className={active}>
              <li className="nav__item">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/properties">Properties</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
              {
                width < 769 &&
                <div className="footer_icons footer_icons_navbar d-flex flex-column justify-content-center align-items-center ">
                  <a href="https://www.facebook.com/dreamcottageltd" target={'_blank'}>
                    <FaFacebook className="icon" size={21}></FaFacebook>
                  </a>
                  <a href="mailto:dreamerpropertiesltd@gmail.com">
                    <FaEnvelope className="icon" size={21}></FaEnvelope>
                  </a>
                  <a href="tel:01922-090882">
                    <FaPhoneAlt className="icon" size={21}></FaPhoneAlt>
                  </a>
                  <a href="https://www.youtube.com/@dreamerpropertiesltd." target='_blank'>
                    <BsYoutube className="icon" size={21} />
                  </a>
                </div>
              }

            </ul>

          </>
      }
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
