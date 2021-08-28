import React, { useEffect } from "react";
import { ProductsList } from "../List";

import { stock } from "./stock";

export const ProductsContainer = () => {

  useEffect(() => {
    (async () => {
      setTimeout(() => {

      }, 300)
    })()
  }, [])

  return (
    <React.Fragment>
      <ProductsList data={stock} />
    </React.Fragment>
  );
};
