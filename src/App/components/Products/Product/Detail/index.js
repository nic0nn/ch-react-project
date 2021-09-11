import React from "react";

import "./styles.scss";

export const ProductDetail = ({
  name,
  price,
  category,
  stock,
  description,
}) => {
  return (
    <div className="product-detail">
      <div className="product-item">
        <span className="name">Nombre: </span> {name}
      </div>
      <div className="product-item">
        <span className="name">Descripción: </span> {description}
      </div>
      <div className="product-item">
        <span className="name">Categoría: </span> {category}
      </div>
      <div className="product-item">
        <span className="name">Precio: </span> {price}
      </div>
      <div className="product-item">
        <span className="name">Stock: </span> {stock}
      </div>
    </div>
  );
};
