import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

//<MenuItem value={10}>Ten</MenuItem>

export const ItemPrices = ({prices}) => {
    const classes = useStyles();
  const [price, setPrice] = React.useState('');

  const handleChange = (event) => {
    setPrice(event.target.value);
  };
    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={price}
          onChange={handleChange}
          label="price"
        >
            <MenuItem value={prices.unity} selected>Unity ${prices.unity}</MenuItem>
            <MenuItem value={prices.["6 items"]}>6 pack ${prices.["6 items"]}</MenuItem>
            <MenuItem value={prices.["12 items"]}>12 pack ${prices.["12 items"]}</MenuItem> 
        </Select>
      </FormControl>
    )
}
