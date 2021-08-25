import React from "react";
import { Link } from "../../../../Link";

import { ROUTES } from "./routes";

import "./styles.scss";

export const NavLinks = () => (
  <>
    {ROUTES.map((route, index) => (
      <Link
        key={`nav-link-${index}`}
        text={route.name}
        href="#"
        className="nav-link"
      />
    ))}
  </>
);
