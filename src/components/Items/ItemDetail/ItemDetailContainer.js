import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";

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

  const handleChange = (event) => {
    setPrice(event.target.value);
    console.log(price);
  };
  
  console.log(drink);
  return (
    <div className="container mt-5">
      {
        <>
          <h2>Bebida: {drink.title}</h2>
          <h2>Type: {drink.type}</h2>
          <img src={`../${drink.img}`} alt={drink.title} />
          <p>Description: {drink.description} </p>
          { Object.keys(drink).length > 0 ?
            <FormControl component="fieldset">
            <FormLabel component="legend">Precios</FormLabel>
            <RadioGroup aria-label="precios" name="precios1" value={price} onChange={handleChange}>
              <FormControlLabel value={drink.prices[0]} control={<Radio />} label={`Unidad: $${drink.prices[0]}`}/>
              <FormControlLabel value={drink.prices[1]} control={<Radio />} label={`6 Unidades: $${drink.prices[1]}`} />
              <FormControlLabel value={drink.prices[2]} control={<Radio />} label={`12 Unidades: $${drink.prices[2]}`} />
            </RadioGroup>
          </FormControl> : <div></div>}
        </>
      }
    </div>
  );
};
