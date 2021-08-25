import React from "react";
import { ProductsList } from "../List";

import { stock } from "./stock";
export const ProductsContainer = () => {
  return (
    <React.Fragment>
      <ProductsList data={stock} />
    </React.Fragment>
  );
};
