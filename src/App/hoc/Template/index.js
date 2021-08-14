import React from "react";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

const Template = ({ children }) => {
  return <React.Fragment>
    <Header />
    { children }
    <Footer />
  </React.Fragment>
}

export default Template;