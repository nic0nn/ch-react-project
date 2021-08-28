import React from "react";
import { ROUTES } from "../../../../routes";
import { Link } from "react-router-dom";
import "./styles.scss";

export const NavBar = () => {
  return (
    <nav className={"nav-links"}>
      {ROUTES.map((route, index) => (
        <Link key={`nav-link-${index}`} className={"nav-link"} to={route.link}>
          {route.name}
        </Link>
      ))}
    </nav>
  );
};
