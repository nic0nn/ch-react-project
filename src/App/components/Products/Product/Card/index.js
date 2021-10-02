import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { CardImage } from "./CardImage";
import { CardContent } from "./CardContent";

import "./styles.scss";
export const ProductCard = ({ product }) => {
  const { name, image, code, price } = product;
  return (
    <Container className="product-card">
      <Row>
        <Col xs={12} lg={6}>
          <CardImage src={image} />
        </Col>
        <Col xs={12} lg={6}>
          <CardContent
            name={name}
            code={code}
            price={price}
            productId={product.id}
          />
        </Col>
      </Row>
    </Container>
  );
};
