import React from "react";

import { Home } from "./pages/Home";
import { Template } from "./shared/Template";

function App() {
  return (
    <React.Fragment>
      <Template>
        <Home />
      </Template>
    </React.Fragment>
  );
}

export default App;
