import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { db } from "../../firebase/firebase";
import { getCurrentDate } from "../../helpers/getCurrentDate";
import { useForm } from "../../hooks/useForm";
import { CartContext } from "../context/CartContext";
import { OrderDetail } from "../OrderDetail/OrderDetail";

export const BuyForm = ({ prices }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [items, setItems] = useState({});
  const [orderID, setOrderID] = useState();
  const total = prices.reduce((prev, next) => prev + next);
  const [order, setOrder] = useState();
  const { cart, setCart } = useContext(CartContext);
  const [orderReady, setOrderReady] = useState(false);
  const date = getCurrentDate("-");
  const [values, handleInputChange] = useForm({
    name: "",
    phone: "",
    mail: "",
  });
  useEffect(() => {
    setItems({
      items: cart,
      date,
      total,
    });
  }, [cart, date, total]);

  const { name, phone, mail } = values;
  const returnHandler = () => {
    history.push("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      ...items,
      ...values,
    };
    setOrder(order);
    setLoading(true);
    try {
      await db
        .collection("orders")
        .add(order)
        .then(({ id }) => setOrderID(id));
      setOrderReady(true);
      setItems({});
      setCart([{}]);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <CircularProgress className="circular-progress" />
      ) : orderReady ? (
        <OrderDetail
          order={order}
          returnHandler={returnHandler}
          orderID={orderID}
        />
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="mail"
                className="form-control"
                id="mail"
                value={mail}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Finalizar Compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};
