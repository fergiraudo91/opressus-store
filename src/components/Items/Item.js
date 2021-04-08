import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bierhause from '../../assets/images/beers/bierhaus.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

export const Item = ({imageUrl, title, description, prices}) => {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="beer"
          height="400"
          image={bierhause}
          title="Beer House"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
          Cerveza BierHaus Scotch Ness Lata 473ml
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The BierHaus Scotch Ness is a sweet caramel scented beer, toffee and biscuit with low bitterness and medium to light body.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" variant="contained" color="primary" className="buy-btn" fullWidth>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
