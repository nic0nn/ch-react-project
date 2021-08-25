import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

import "./styles.scss";

export const Template = ({ className, children }) => {
  return (
    <div className={`template ${className ? className : ""}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
