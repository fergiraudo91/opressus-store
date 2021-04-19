import React, { useEffect, useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import './Item.css';
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
  //const classes = useStyles();
  const { drinkId } = useParams();
  const [drink, setDrink] = useState([]);
  const [price, setPrice] = useState(0);

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
    console.log("Usted compro: " + drink.title);
    console.log("precio: " + price);
  };
  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="mt-5 ml-5 mr-5 mb-5">
      {
        <>
          <div className="row">
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
                    <ItemCount drink={drink} handleChange={handleChange} />
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="precio2"
                      value={drink.prices[1]}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="precio2" style={{color:"#E67E22"}}>
                      Promo 6 Unidades: ${drink.prices[1]} 10% Off
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="precio3"
                      value={drink.prices[2]}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="precio3" style={{color:"#DC3545"}}>
                      Promo 12 Unidades: ${drink.prices[2]} 20% Off
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
          </div>
        </>
      }
    </div>
  );
};
