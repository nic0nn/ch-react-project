import React from "react";

import classNames from "classnames";

import { Header } from "./Header";
import { Footer } from "./Footer";

import "./styles.scss";

export const Template = ({ className, children }) => {
  return (
    <div className={classNames("template", className)}>
      <Header />
      <div className="content">
        { children }
      </div>
      <Footer />
    </div>
  );
};
