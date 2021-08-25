import React from "react";
import { Link } from "../../../Link";
import { ROUTES } from "./NavLinks/routes";

import "./styles.scss";

export const NavBar = () => {
  return (
    <nav>
      {ROUTES.map((route, index) => (
        <Link
          key={`navbar-${index}`}
          text={route.name}
          href="#"
          className="nav-link"
        />
      ))}
    </nav>
  );
};
