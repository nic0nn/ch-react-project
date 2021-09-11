import { Badge } from "@material-ui/core";
import { Person, ShoppingCart as Cart } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../../../../context/ShoppingCart";

import "./styles.scss";

export const ShortCuts = () => {
  const { count } = useContext(ShoppingCart);

  return (
    <div className="shortcuts">
      <Person />
      <div className="shopping-cart">
        <Badge badgeContent={count().toString()} color="secondary">
          <Link to="/cart">
            <Cart />
          </Link>
        </Badge>
      </div>
    </div>
  );
};
