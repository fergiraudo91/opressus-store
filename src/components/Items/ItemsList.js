import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./ItemList.css";
import { Item } from "./Item";
import beers from '../../data/beers.json';

/*

<Grid item xs={12} sm={6} lg={3}>
          <Item />
        </Grid>*/


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

export const ItemsList = () => {
  const getData = async () => {
    const response = await fetch(beers);
    const data = await response.json();
    console.log(data);
  }
  
  useEffect(() => {
    getData();
  }, [])

  const classes = useStyles();
  return (
    <div className={classes.root + " items-container"}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <h1 className="title">List of Beers</h1>
        </Grid>
        {

        }
      </Grid>
    </div>
  );
};
