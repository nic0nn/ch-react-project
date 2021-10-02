import React from "react";

import { Table, Container } from "react-bootstrap";

import "./styles.scss";

export const OrderInfo = ({ order, name, lastName, email, phone, total }) => {
  return (
    <Container className="order-info-container">
      <h1>ORDEN DE COMPRA</h1>
      <hr />
      <h3>Datos del comprador</h3>
      <p>Nombre: {name}</p>
      <p>Apellido: {lastName}</p>
      <p>Email: {email}</p>
      <p>Telefono: {phone}</p>
      <h3>Total abonado</h3>${total}
      <hr />
      <h3>Productos comprados</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {order?.map((product, index) => {
            return (
              <tr key={`order-product-${index}`}>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
