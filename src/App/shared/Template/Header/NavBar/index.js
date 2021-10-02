import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Logo } from "../../../Logo";
import { getRoutes } from "../../../../routes";

import "./styles.scss";

export const NavBar = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    (async () => {
      const routes = await getRoutes();
      setRoutes(routes);
    })();
  }, []);

  return (
    <Navbar expand="lg" className="fill">
      <Container>
        <Navbar.Brand
          children={
            <Link to="/">
              <Logo />
            </Link>
          }
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul>
              {routes.map((route, index) => (
                <li key={`nav-link-${index}`}>
                  <Link to={route.link}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
