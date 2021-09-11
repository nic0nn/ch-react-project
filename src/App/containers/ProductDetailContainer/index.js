import { Grid } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductActions } from "../../components/Products/Product/Actions";
import { ProductDetail } from "../../components/Products/Product/Detail";
import { ProductImage } from "../../components/Products/Product/Image";
import { CounterContext } from "../../context/Counter";
import { ShoppingCart } from "../../context/ShoppingCart";
import { Loading } from "../../shared/Loading";

import swal from "sweetalert2";

import { stock as products } from "./../../data/stock";

import "./styles.scss";

export const ProductDetailContainer = () => {
  const { add } = useContext(ShoppingCart);
  const { counter } = useContext(CounterContext);

  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const handleAdd = () => {
    swal
      .fire({
        title: "Agregar al carrito",
        text: "¿Desea agregar al carrito la cantidad de productos seleccionados?",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Aceptar",
      })
      .then(({ isConfirmed }) => {
        if (isConfirmed) add({ product, quantity: counter });
      });
  };

  useEffect(() => {
    const getData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const product = products.find((p) => p._id === productId);
          resolve(product);
        }, 2000);
      });
    };

    (async () => {
      setLoading(true);
      const product = await getData();
      setLoading(false);
      setProduct(product);
    })();
  }, [productId]);

  if (loading) return <Loading size="30px" />;

  if (!product) return <div>No se encontró el producto</div>;

  return (
    <Grid
      className={"product-detail-container"}
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={6}>
        <ProductImage {...product} />
      </Grid>
      <Grid item xs={6}>
        <ProductDetail {...product} />
        <ProductActions handleAdd={handleAdd} {...product} />
      </Grid>
    </Grid>
  );
};
