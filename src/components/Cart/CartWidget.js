import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const CartWidget = (props) => {
  return (
    <li className="nav-item">
      <Link to="/cart" className="nav-links" onClick={props.onClick}>
        Cart <ShoppingCartIcon />
      </Link>
    </li>
  );
};
