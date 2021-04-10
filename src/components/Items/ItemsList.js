import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./ItemList.css";
import { Item } from "./Item";
import beers from '../../data/beers.json';


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
  
  const [data, setData] = useState([]);

  
  useEffect(() => {
    setTimeout(() => {
      setData(beers);
    }, 2000);
  }, [])

  const classes = useStyles();
  return (
    <div className={classes.root + " items-container"}>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <h1 className="title">List of Beers</h1>
        </Grid>
        {
          data.map((beer, i) => {
            return(
            <Grid item xs={12} sm={6} lg={3} key={i} >
              <Item 
              imageUrl={beer.img} 
              title={beer.title}
              description={beer.description}
              prices={beer.prices}
              />
            </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
};
