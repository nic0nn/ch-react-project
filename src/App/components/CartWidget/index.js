import { ShoppingCart as Cart } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCart";
import { Badge } from "react-bootstrap";
export const CartWidget = () => {
  const { getCartQuantity } = useContext(ShoppingCartContext);
  return (
    <Link to="/cart">
      <Cart />
      <Badge color="secondary">{getCartQuantity()}</Badge>
    </Link>
  );
};
