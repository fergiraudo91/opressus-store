import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../context/CartContext";

export const CartWidget = (props) => {
  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    if (cart.length === 1) {
      if (!!cart[0].prices) {
        setQuantity(cart[0].quantity);
      }
    } else {
      setQuantity(cart.reduce((prev, next) => prev.quantity + next.quantity));
    }
  }, [cart, quantity])


  

  return (
    quantity > 0 && (
      <li className="nav-item">
        <Link to="/cart" className="nav-links" onClick={props.onClick}>
          <ShoppingCartIcon /> {quantity}
        </Link>
      </li>
    )
  );
};
