import React from "react";
import { ItemDetail } from "./ItemDetail";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

export const ItemDetailContainer = ({
  title,
  type,
  prices,
  description,
  img,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ItemDetail
            title={title}
            type={type}
            prices={prices}
            description={description}
            img={img}
          />
        </Grid>
      </Grid>
    </div>
  );
};
