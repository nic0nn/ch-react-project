import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsList } from "../../components/Products/List";

import { stock as products } from "../../data/stock";
import { Loading } from "../../shared/Loading";

export const ProductsListContainer = () => {
  const [stock, setStock] = useState();
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const getData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
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
  }, [category]);

  if (loading) return <Loading size={"30px"} />;

  return (
    <React.Fragment>
      <ProductsList data={stock} loading={loading} />
    </React.Fragment>
  );
};
