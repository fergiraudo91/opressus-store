import React, { useState } from "react";

export const ItemCount = ({drink, handleChange}) => {
    const initialPrice = drink.prices[0];
    const [precio, setPrecio] = useState(initialPrice);
    const [cantidad, setCantidad] = useState(1);
    const onAdd = () => {
        setCantidad(cantidad + 1);
        setPrecio(initialPrice * (cantidad + 1));
    }
    const onSubstract = () => {
        if(cantidad <= 1){
            return;
        }
        setCantidad(cantidad - 1);
        setPrecio(initialPrice * (cantidad - 1));
    }
  return (
    <>
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id="precio1"
        value={precio}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="precio1">
        {cantidad} {cantidad === 1 ? 'unidad' : 'unidades'}: ${precio}
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
