import React, { useContext, useEffect, useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import { CartContext } from "../../context/CartContext";
import "./Item.css";
import { ItemCount } from "./ItemCount";

export const ItemDetail = () => {
  //const classes = useStyles();
  const { drinkId } = useParams();
  const [drink, setDrink] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { setCart, cart } = useContext(CartContext);

  useEffect(() => {
    getUserByID(drinkId);
  }, [drinkId]);

  const getUserByID = async (id) => {
    const data = await fetch("../data/beers.json");
    const bebidas = await data.json();
    const bebida = bebidas.find((item) => item.id === +id);
    setDrink(bebida);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.entries(cart[0]).length === 0) {
      setCart([{ ...drink, prices: price, quantity }]);
      alert("El producto ha sido agregado correctamente");
    } else {
      setCart([...cart, { ...drink, prices: price, quantity }]);
      alert("El producto ha sido agregado correctamente");
    }
    
  };

  const handleChange = (event) => {
    setPrice(event.target.value);
    if(document.getElementById("precio6").checked){
      setQuantity(6);
    }
    else{
      if(document.getElementById("precio12").checked){
        setQuantity(12);
      }
      else{
        if(quantity===0){
          setQuantity(1);
        }
      }
    }
  };

  return (
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
            <div className="form-check mb-2">
              <ItemCount 
              drink={drink} 
              handleChange={handleChange} 
              setQuantity={setQuantity} 
              quantity={quantity}
              price={price}
              setPrice={setPrice}
              />
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="precio6"
                value={drink.prices[1]}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="precio2">
                Promo 6 Unidades: ${drink.prices[1]}
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="precio12"
                value={drink.prices[2]}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="precio3">
                Promo 12 Unidades: ${drink.prices[2]}
              </label>
            </div>
            <button className="btn mt-3" type="submit">
              Comprar
            </button>
          </form>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
