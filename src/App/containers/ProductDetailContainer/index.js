import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { CounterContext } from "../../context/Counter";
import { ShoppingCartContext } from "../../context/ShoppingCart";

import { ProductDetail } from "../../components/Products/Product/Detail";

import { getProduct } from "../../firebase/utils";

import "./styles.scss";
import { Loading } from "../../shared/Loading";

export const ProductDetailContainer = () => {
  const { addProduct } = useContext(ShoppingCartContext);

  const [isLoading, setIsLoading] = useState(false);

  const { productId } = useParams();
  const { counter } = useContext(CounterContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const product = await getProduct(productId);
      return product;
    };

    (async () => {
      setIsLoading(true);
      const product = await getData();
      setIsLoading(false);
      setProduct(product);
    })();
  }, [productId]);

  if (!product) {
    if (!isLoading) return <div>No se encontró el producto</div>;
    return null;
  }

  return (
    <Loading state={isLoading} size={40}>
      <ProductDetail
        product={product}
        addProduct={() => addProduct({ ...product, quantity: counter })}
      />
      ;
    </Loading>
  );
};
