import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const CardContent = ({ name, code, price, productId }) => {
  return (
    <div className={"product-card-content"}>
      <div className="product-card-title">
        <div className="product-name">{name}</div>
        <div className="product-subtitle">COD: {code}</div>
      </div>
      <div className="product-price">
        $ <span>{price}</span>
      </div>
      <Link to={`/productos/${productId}/detalle`}>
        <Button>VER PRODUCTO</Button>
      </Link>
    </div>
  );
};
