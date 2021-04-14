import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ItemPrices } from './ItemPrices';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    textAlign: 'center',
    margin: 'auto'
  },
});

export const ItemDetail = ({title, type, prices, description, img}) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="600"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type: {type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             <ItemPrices prices={prices} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" variant="contained" fullWidth>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
    
}
