import React from "react";
import { Carousel } from "../../components/Carrousel";
import { ProductsListContainer } from "../../containers/ProductsListContainer";

import "./styles.scss";

export const HomePage = () => (
  <React.Fragment>
    <Carousel />
    <ProductsListContainer />
  </React.Fragment>
);
