import React, { useEffect, useState } from "react";

export const ItemCount = ({drink, handleChange, setQuantity}) => {
    const initialPrice = drink.prices[0];
    const [price, setPrice] = useState(initialPrice);
    useEffect(() => {
      setPrice(initialPrice);
    }, [setPrice, initialPrice])



    const [cantidad, setCantidad] = useState(1);
    const onAdd = () => {
        setCantidad(cantidad + 1);
        setPrice(initialPrice * (cantidad + 1));
        setQuantity(cantidad + 1);
    }
    const onSubstract = () => {
        if(cantidad <= 1){
            return;
        }
        setCantidad(cantidad - 1);
        setPrice(initialPrice * (cantidad - 1));
    }
  return (
    <>
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id="precio1"
        value={price}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="precio1">
        {cantidad} {cantidad === 1 ? 'unidad' : 'unidades'}: ${price}
        <button 
        type="button"
        className="btn ml-3 mr-3"
        onClick={onAdd}
        >+</button>
        <button 
        type="button"
        className="btn"
        onClick={onSubstract}
        >-</button>
      </label>
    </>
  );
};
