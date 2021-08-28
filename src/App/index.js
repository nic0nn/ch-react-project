import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Template } from "./shared/Template";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Products } from "./components/Products";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Template>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
            <Route path={"/products/:category"} component={Products} />
            <Route
              path={"/contact"}
              component={Contact}
            />
          </Switch>
        </Template>
      </Router>
    </React.Fragment>
  );
}

export default App;
