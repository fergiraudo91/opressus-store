import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import { db } from "../../../firebase/firebase";
import { CartContext } from "../../context/CartContext";
import { ModalBtn } from "../../Modal/ModalBtn";
import "./Item.css";
import { ItemCount } from "./ItemCount";

export const ItemDetail = () => {
  //const classes = useStyles();
  const { drinkId } = useParams();
  const [drink, setDrink] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { setCart, cart } = useContext(CartContext);
  const [modalMessage, setmodalMessage] = useState("El item ha sido añadido al carrito");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const itemCollection = await db.collection("items");
      const item = await itemCollection.doc(drinkId);
      const doc = await item.get();
      const bebida = { ...doc.data(), id: doc.id }
      setDrink(bebida);
      setLoading(false);
    }
    )();
  }, [drinkId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.entries(cart[0]).length === 0) {
      setCart([{ ...drink, prices: price, quantity }]);
      //alert("El producto ha sido agregado correctamente");
    } else {
      let busqueda = cart.find(item => item.id === drink.id);
      if (busqueda) {
        setmodalMessage("El item ya ha sido añadido con anterioridad, por favor verifique el carrito");
        return;
      }
      else {
        setCart([...cart, { ...drink, prices: price, quantity }]);
      }
      // alert("El producto ha sido agregado correctamente");
    }

  };

  const handleChange = (event) => {
    setPrice(event.target.value);
    if (document.getElementById("precio6").checked) {
      setQuantity(6);
    }
    else {
      if (document.getElementById("precio12").checked) {
        setQuantity(12);
      }
      else {
        if (quantity === 0) {
          setQuantity(1);
        }
      }
    }
  };

  return (
    loading ?
      <div className="circular-container">
        <CircularProgress className="circular-progress" />
      </div>
      :
    <>
      <div className="col-12 col-xl-6 image">
        <img src={`../${drink.img}`} alt={drink.title} />
      </div>
      <div className="col-12 col-xl-6">
        <h2>Bebida: {drink.title}</h2>
        <h2>Type: {drink.type}</h2>

        <p>Description: {drink.description} </p>
        {Object.keys(drink).length > 0 ? (
          <form onSubmit={handleSubmit}>
            <div className="form-check mb-3">
              <ItemCount
                drink={drink}
                handleChange={handleChange}
                setQuantity={setQuantity}
                quantity={quantity}
                price={price}
                setPrice={setPrice}
              />
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="precio6"
                value={drink.prices[1]}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="precio2">
                Promo 6 Unidades: ${drink.prices[1]} <span className="discont">10% off</span>
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="precio12"
                value={drink.prices[2]}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="precio3">
                Promo 12 Unidades: ${drink.prices[2]} <span className="discont">10% off</span>
              </label>
            </div>
            <ModalBtn modalMessage={modalMessage} />
            {/*<button className="btn mt-3" type="submit">
              Comprar
            </button>
        */}
          </form>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
