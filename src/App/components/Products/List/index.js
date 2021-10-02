import React from "react";
import { ProductCard } from "../Product/Card";
import { Col, Container, Row } from "react-bootstrap";

export const ProductsList = ({ data }) => {
  return (
    <Container fluid={"true"} className="products">
      <Row>
        {data?.map((d, index) => (
          <Col xs={12} lg={6  } key={`products-grid-${index}`}>
            <ProductCard key={index} product={d} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
