import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import './Item.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const ItemDetailContainer = () => {
  const classes = useStyles();
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
    console.log(bebidas);
    setDrink(bebida);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(price);
  };
  const handleChange = (event) => {
    setPrice(event.target.value);
    console.log(price);
  };

  console.log(drink);
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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="precio1"
                      value={drink.prices[0]}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="precio1">
                      Unidad: ${drink.prices[0]}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="precio2"
                      value={drink.prices[1]}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="precio2">
                      6 Unidades: ${drink.prices[1]}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="precio3"
                      value={drink.prices[2]}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="precio3">
                      12 Unidades: ${drink.prices[2]}
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
