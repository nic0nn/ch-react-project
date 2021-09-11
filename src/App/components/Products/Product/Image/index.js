import React from "react";

import "./styles.scss";

export const ProductImage = ({ image, name }) => {
  return (
    <div
      className="product-image"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};
