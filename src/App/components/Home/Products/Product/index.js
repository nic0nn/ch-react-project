import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";
import React from "react";

import "./styles.scss";

export const Product = ({ info }) => {
  console.log('info.image :>> ', info.image);
  return (
    <Card className={"product"}>
      <CardHeader title={info.name} />
      <CardMedia image={info.image} />
      <CardContent>{info.description}</CardContent>
    </Card>
  );
};
