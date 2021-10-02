import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsList } from "../../components/Products/List";
import { getProducts } from "../../firebase/utils";
import { Loading } from "../../shared/Loading";

import "./styles.scss";

export const ProductsListContainer = () => {
  const [stock, setStock] = useState(null);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      return await getProducts(category);
    };

    (async () => {
      setIsLoading(true);
      const products = await getData();
      setStock(products);
      setIsLoading(false);
    })();

    return () => {
      setStock(null);
    };
  }, [category]);

  return (
    <React.Fragment>
      <div className="product-list-container">
        <h1>Nuestros productos</h1>
        <Loading state={isLoading} size={30}>
          {stock?.length === 0 ? (
            <div className="empty-list">No se encontraron productos</div>
          ) : (
            <ProductsList data={stock} />
          )}
        </Loading>
      </div>
    </React.Fragment>
  );
};
