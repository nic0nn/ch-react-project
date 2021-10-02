import React, { useContext, useState } from "react";

import { Button, Col, Container, Row, Table } from "react-bootstrap";

import { CartOrder } from "../CartOrder";
import { ShoppingCartContext } from "../../context/ShoppingCart";

import "./styles.scss";

export const CartInfo = ({ handleSubmit, validated, goBack }) => {
  const { shoppingCart, getCartTotal } = useContext(ShoppingCartContext);
  const [showCartOrder, setShowCartOrder] = useState(false);
  const closeCartOrder = () => setShowCartOrder(false);
  const showOrder = () => setShowCartOrder(true);

  return (
    <Container className="cart-info">
      <Button onClick={goBack}>VOLVER</Button>
      <Row>
        <Col xs={12} lg={3}>
          <div className="cart-total">
            <div>
              <p>TOTAL A PAGAR</p>$ <span>{getCartTotal()}</span>
            </div>
            <Button onClick={showOrder}>TERMINAR COMPRA</Button>
          </div>
        </Col>
        <Col xs={12} lg={8}>
          <h1>Productos a comprar</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart?.map((product, index) => (
                <tr key={`cart-product-${index}`}>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.total}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <CartOrder
        show={showCartOrder}
        handleClose={closeCartOrder}
        handleSubmit={handleSubmit}
        validated={validated}
      />
    </Container>
  );
};
