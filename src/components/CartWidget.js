import React from "react";
import { Link } from "react-router-dom";

export const CartWidget = (props) => {
  return (
    <li className="nav-item">
      <Link to="/cart" className="nav-links" onClick={props.onClick}>
        Cart <i className="fas fa-shopping-cart"></i>
      </Link>
    </li>
  );
};
