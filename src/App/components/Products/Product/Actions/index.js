import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { CounterContext } from "../../../../context/Counter";
import { Counter } from "../../../../shared/Counter";

import "./styles.scss";

export const ProductActions = ({ stock, handleAdd }) => {
  const { counter } = useContext(CounterContext);

  return (
    <div className="product-actions">
      <Counter max={stock}/>
      <Button disabled={!counter} onClick={handleAdd}>Agregar al carrito</Button>
    </div>
  );
};
