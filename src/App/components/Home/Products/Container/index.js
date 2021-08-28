import React, { useEffect } from "react";
import { useState } from "react";
import { ProductsList } from "../List";

import { products } from "./products";

export const ProductsContainer = () => {
  const [stock, setStock] = useState();

  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };

  useEffect(() => {
    (async () => {
      const products = await getData();
      setStock(products);
    })();
  }, []);

  return (
    <React.Fragment>
      <ProductsList data={stock} />
    </React.Fragment>
  );
};
