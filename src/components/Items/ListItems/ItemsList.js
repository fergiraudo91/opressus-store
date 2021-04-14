import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./ItemList.css";
import { Item } from "../SingleItem/Item";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#151515",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const ItemsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data/beers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root + " items-container"}>
      <Grid container spacing={4} justify="center" alignItems="center">
        <Grid item xs={12}>
          <h1 className="title">List of Drinks</h1>
        </Grid>
        {data.map((beer) => {
          return (
            <Grid item xs={12} sm={6} lg={3} key={beer.id}>
              <Item
                imageUrl={beer.img}
                title={beer.title}
                description={beer.description}
                prices={beer.prices}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
