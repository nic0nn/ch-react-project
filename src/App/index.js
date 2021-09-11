import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Template } from "./shared/Template";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Products } from "./components/Products";
import { ShoppingCartProvider } from "./context/ShoppingCart";
import { Detail } from "./pages/Detail";
import { NotImplemented } from "./shared/NotImplemented";

function App() {
  return (
    <React.Fragment>
      <Router>
        <ShoppingCartProvider>
          <Template>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path={"/home"} component={Home} />
              <Route
                exact
                path={"/productos/:productId/detalle"}
                component={Detail}
              />
              <Route path={"/productos/:category"} component={Products} />
              <Route path={"/contacto"} component={Contact} />
              <Route path={"/cart"} component={NotImplemented} />
            </Switch>
          </Template>
        </ShoppingCartProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
