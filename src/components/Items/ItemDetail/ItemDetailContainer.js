import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router";
import { getItemById } from "../../../helpers/getItemById";

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
  const {drinkId} = useParams();
  const [drink, setDrink] = useState({});
  useEffect(() => {
    let bebida;
    fetch("../data/beers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data => {
       setDrink(data.find(item => item.id === +drinkId))
    }))
    setDrink(bebida);
  }, [drinkId])

  console.log(drink);

  return(
    <div className="container">
      <h1>Bebida: {drink ? drink.title : ''}</h1>
      <h1>Tipo: {drink ? drink.type : ''}</h1>
      <h1>Precio: </h1>
      <img src={drink ? `../${drink.img}` : ''} alt={drink ? drink.title : ''} />
      <h4>Description: {drink ? drink.description : ''}</h4>
    </div>
  )
}


