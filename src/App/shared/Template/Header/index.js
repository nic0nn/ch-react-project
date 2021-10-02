import React from "react";

import { Col, Row } from "react-bootstrap";

import { NavBar } from "./NavBar";
import { ShortCuts } from "./ShortCuts";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <Row>
        <Col xs={10}>
          <NavBar />
        </Col>
        <Col xs={1}>
          <ShortCuts />
        </Col>
      </Row>
    </header>
  );
};
