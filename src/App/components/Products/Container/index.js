import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsList } from "../List";

import { stock as products } from "./stock";

export const ProductsContainer = () => {
  const [stock, setStock] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const getData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const { category } = params
          const filtered = category
            ? products.filter((product) => product.category === category)
            : products;
          resolve(filtered);
        }, 2000);
      });
    };
    (async () => {
      setLoading(true);
      const products = await getData();
      setLoading(false);
      setStock(products);
    })();
  }, [params]);

  return (
    <React.Fragment>
      <ProductsList data={stock} loading={loading} />
    </React.Fragment>
  );
};
