import React, { useState } from "react";
import { Button } from "./Button";
import "./NavBar.css";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { CartWidget } from "./CartWidget";

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Opressus" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onClick={closeMobileMenu}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/drinks/beer" className="nav-links">
              Beers <i className="fas fa-beer"></i>
            </Link>
            {dropdown && <DropDown />}
          </li>
          <li className="nav-item">
            <Link to="/drinks/wines" className="nav-links" onClick={closeMobileMenu}>
              Wines <i className="fas fa-wine-bottle"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/drinks/spirits" className="nav-links" onClick={closeMobileMenu}>
              Spirits Drinks <i className="fas fa-glass-whiskey"></i>
            </Link>
          </li>
          <CartWidget onClick={closeMobileMenu}/>
          <li className="nav-item">
            <Link
              to="/spirits"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}
export default NavBar;
