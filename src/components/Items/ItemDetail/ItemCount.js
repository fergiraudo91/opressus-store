import React, { useEffect, useState } from "react";

export const ItemCount = ({ drink, handleChange, setQuantity, price, setPrice }) => {
  const initialPrice = drink.prices[0];
  const [precio, setPrecio] = useState(initialPrice);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setPrice(initialPrice);
    setPrecio(initialPrice);
    setQuantity(1);
  }, [initialPrice, setPrice, setQuantity, clicked])

  const handleClick = () => {
    setClicked(true);
  }

  const [cantidad, setCantidad] = useState(1);
  const onAdd = () => {
    setCantidad(cantidad + 1);
    setPrice(initialPrice * (cantidad + 1));
    setPrecio(initialPrice * (cantidad + 1));
    setQuantity(cantidad + 1);
  }
  const onSubstract = () => {
    if (cantidad <= 1) {
      return;
    }
    setCantidad(cantidad - 1);
    setPrice(initialPrice * (cantidad - 1));
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
        checked
        onClick={handleClick}
      />
      <label className="form-check-label" htmlFor="precio1">
        {cantidad} {cantidad === 1 ? 'unidad' : 'unidades'}: ${precio}
        <button
          type="button"
          className="btn ml-3 mr-3 pl-2 pr-2 pt-1 pb-1"
          onClick={onAdd}
        >+</button>
        <button
          type="button"
          className="btn mr-3 pl-2 pr-2 pt-1 pb-1"
          onClick={onSubstract}
        >-</button>
      </label>
    </>
  );
};
