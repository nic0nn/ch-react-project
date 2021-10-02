import React, { useContext, useEffect } from "react";

import { Add, Remove } from "@material-ui/icons";
import { Button } from "react-bootstrap";

import { CounterContext } from "../../context/Counter";

import "./styles.scss";

export const Counter = ({ max, min, callback }) => {
  const { counter, add, remove } = useContext(CounterContext);

  const handleAdd = (e) => {
    if (max > counter && counter >= (min || 0)) add();
  };

  useEffect(() => {
    if (callback) callback(counter);
  }, [counter, callback]);

  return (
    <div className="counter">
      <Button onClick={handleAdd}>
        <Add />
      </Button>
      {counter}
      <Button onClick={remove}>
        <Remove />
      </Button>
    </div>
  );
};
