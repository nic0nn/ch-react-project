import { Grid } from "@material-ui/core";
import React from "react";
import { ProductCard } from "../Product/Card";

export const ProductsList = ({ data }) => {
  return (
    <Grid className="products" container justifyContent="center">
      {data?.map((d, index) => (
        <Grid key={`products-grid-${index}`} item>
          <ProductCard key={index} product={d} />
        </Grid>
      ))}
    </Grid>
  );
};
