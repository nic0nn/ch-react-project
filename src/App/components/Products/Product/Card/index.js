import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Fab,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export const ProductCard = ({ product }) => {
  return (
    <Card className={"product"}>
      <CardHeader title={product.name} />
      <CardMedia image={product.image} />
      <CardContent>
        {product.description}{" "}
        <Link to={`/productos/${product._id}/detalle`}>
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </Link>
      </CardContent>
    </Card>
  );
};
