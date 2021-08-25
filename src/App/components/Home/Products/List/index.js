import { Grid } from "@material-ui/core";
import React from "react";
import { Product } from "./Product";

export const ProductsList = ({ data }) => {
  return (
    <Grid className="products" container spacing={2}>
      {data.map((d, index) => (
        <Grid item>
          <Product key={index} info={d} />
        </Grid>
      ))}
    </Grid>
  );
};
