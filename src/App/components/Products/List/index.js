import { Grid } from "@material-ui/core";
import React from "react";
import { Loading } from "../../../shared/Loading";
import { Product } from "../Product";

export const ProductsList = ({ data, loading }) => {
  return loading ? (
    <Loading size={30} />
  ) : (
    <Grid className="products" container justifyContent="center">
      {data?.map((d, index) => (
        <Grid key={`products-grid-${index}`} item>
          <Product key={index} info={d} />
        </Grid>
      ))}
    </Grid>
  );
};
