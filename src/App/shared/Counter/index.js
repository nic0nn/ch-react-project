import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React, { useContext } from "react";
import { CounterContext } from "../../context/Counter";

import "./styles.scss";

export const Counter = ({ max }) => {
  const { counter, add, remove } = useContext(CounterContext);

  const handleAdd = (e) => {
    if (max > counter) add();
  };
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
