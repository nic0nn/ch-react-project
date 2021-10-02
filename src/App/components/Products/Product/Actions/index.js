import React, { useContext } from "react";
import { CounterContext } from "../../../../context/Counter";
import { Counter } from "../../../../shared/Counter";

import "./styles.scss";

export const ProductActions = ({ stock, addProduct }) => {
  const {counter}= useContext(CounterContext);
  return (
    <div className="product-actions">
      <Counter max={stock} value={0} />
      <button
        className="buy--btn"
        onClick={addProduct}
        disabled={!counter}
      >
        AÑADIR AL CARRITO
      </button>
    </div>
  );
};
