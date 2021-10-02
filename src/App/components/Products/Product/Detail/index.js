import React from "react";
import { ProductActions } from "../Actions";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

export const ProductDetail = ({ product, addProduct }) => {
  const { name, image, description, code, price } = product;
  return (
    <Container className="product">
      <Row>
        <Col lg={6}>
          <div className="product__photo">
            <div className="photo-container">
              <div className="photo-main">
                <img src={image} alt="green apple slice" />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="product__info">
            <div className="title">
              <h1>{name}</h1>
              <span>COD: {code}</span>
            </div>
            <div className="price">
              $ <span>{price}</span>
            </div>
            <div className="description">
              <h3>DESCRIPCION</h3>
              {description}
            </div>
            <ProductActions {...product} addProduct={addProduct} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
