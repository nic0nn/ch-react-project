import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Template } from "./shared/Template";

import { HomePage } from "./pages/Home";
import { Products } from "./pages/Products";
import { CartInfo } from "./pages/CartInfo";
import { OrderInfo } from "./pages/OrderInfo";
import { ProductDetailPage } from "./pages/ProductDetail";

import { ShoppingCartProvider } from "./context/ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <Router>
        <ShoppingCartProvider>
          <Template>
            <Switch>
              <Route exact path={"/"} component={HomePage} />
              <Route path={"/home"} component={HomePage} />
              <Route
                exact
                path={"/productos/:productId/detalle"}
                component={ProductDetailPage}
              />
              <Route
                path={"/productos/categoria/:category"}
                component={Products}
              />
              <Route path={"/cart"} component={CartInfo} />
              <Route path={"/order/:orderId"} component={OrderInfo} />
            </Switch>
          </Template>
        </ShoppingCartProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
