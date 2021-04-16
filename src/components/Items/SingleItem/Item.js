import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Item.css';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });



export const Item = ({imageUrl, title, description, prices, id}) => {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`drink/${id}`}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="beer"
          height="300"
          image={imageUrl}
          title="Beer House"
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="subtitle1" component="h3" align="center">
          {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button size="large" variant="contained" color="primary" className="buy-btn" fullWidth>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
