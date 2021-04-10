import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
          image={`http://c2060241.ferozo.com/${imageUrl}`}
          title="Beer House"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
          {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography> */}
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
