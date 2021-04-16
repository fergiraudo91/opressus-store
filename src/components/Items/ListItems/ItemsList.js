import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./ItemList.css";
import { Item } from "../SingleItem/Item";
import { useParams } from "react-router";

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
  const { type } = useParams();
  useEffect(() => {
    let filter;

    fetch("data/beers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        switch (type) {
          case "beer":
            filter = data.filter(
              (item) =>
                item.type === "red" ||
                item.type === "golden" ||
                item.type === "black" ||
                item.type === "IPA"
            );
            break;
          case "wines":
            filter = data.filter((item) => item.type === "wine");
            break;
          case "ipa":
            filter = data.filter((item) => item.type === "IPA");
            break;
          case "golden":
            filter = data.filter((item) => item.type === "golden");
            break;
          case "red":
            filter = data.filter((item) => item.type === "red");
            break;
            case "black":
              filter = data.filter((item) => item.type === "black");
              break;

          default:
            filter = data;
            break;
        }
        setData(filter);
      });
  }, [type]);

  const classes = useStyles();
  return (
    <div className={classes.root + " items-container"}>
      <Grid container spacing={4} justify="center" alignItems="center">
        <Grid item xs={12}>
          <h1 className="title">List of {!!type ? type : 'Drinks'}</h1>
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
