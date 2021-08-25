import React from "react";
import { Products } from "../../components/Home/Products";
import { Template } from "../../shared/Template";

import "./styles.scss"

export const Home = () => {
  return (
    <Template className={"home"}>
      <Products />
    </Template>
  );
};
