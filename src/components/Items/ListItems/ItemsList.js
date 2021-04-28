import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./ItemList.css";
import { Item } from "../SingleItem/Item";
import { useParams } from "react-router";
import { db } from '../../../firebase/firebase';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  const [loading, setLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      let filter;
      const { docs } = await db.collection("items").get();
      const drinks = docs.map(item => ({...item.data(), id: item.id}));
      switch (type) {
        case "beer":
          filter = drinks.filter(
            (item) =>
              item.type === "red" ||
              item.type === "golden" ||
              item.type === "black" ||
              item.type === "IPA"
          );
          break;
        case "wines":
          filter = drinks.filter((item) => item.type === "wine");
          break;
        case "spirits":
          filter = drinks.filter((item) => item.type === "spirits");
          break;
        case "ipa":
          filter = drinks.filter((item) => item.type === "IPA");
          break;
        case "golden":
          filter = drinks.filter((item) => item.type === "golden");
          break;
        case "red":
          filter = drinks.filter((item) => item.type === "red");
          break;
        case "black":
          filter = drinks.filter((item) => item.type === "black");
          break;

        default:
          filter = drinks;
          break;
      }
      setData(filter);
      setLoading(false);
    }
    getData();

  }, [type]);

  const classes = useStyles();
  return (
    loading ?
      <div className="circular-container">
        <CircularProgress className="circular-progress" />
      </div>
      :
      <div className={classes.root + " items-container"}>
        <Grid container spacing={4} justify="center" alignItems="center">
          <Grid item xs={12}>
            <h1 className="title">List of {!!type ? type : 'Drinks'}</h1>
          </Grid>
          {data.map((beer) => {
            return (
              <Grid item xs={12} sm={6} lg={3} key={beer.id}>
                <Item
                  id={beer.id}
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
