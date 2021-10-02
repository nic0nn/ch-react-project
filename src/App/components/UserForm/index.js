import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export const UserForm = ({
  name,
  email,
  reEmail,
  phone,
  lastName,
  handleSubmit,
  validated,
  formRef,
}) => {
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={(event) => handleSubmit(event, formRef)}
      ref={formRef}
    >
      <Row className="mb-3">
        <Col xs={12} lg={6}>
          <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="Ingrese su nombre"
              value={name?.value || ""}
              onChange={name.onChange}
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar un nombre
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder="Ingrese su apellido"
              value={lastName?.value || ""}
              onChange={lastName.onChange}
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar un apellido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom04">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              name="phone"
              required
              type="text"
              placeholder="Ingrese su teléfono"
              value={phone?.value || ""}
              onChange={phone.onChange}
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar un telefono
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={12} lg={6}>
          <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              required
              type="email"
              placeholder="Ingrese su email"
              value={email?.value || ""}
              onChange={email.onChange}
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar un correo correcto
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Repetir Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Repita su email"
              pattern={`${email.value}`}
              value={reEmail?.value || ""}
              onChange={reEmail.onChange}
            />
            <Form.Control.Feedback type="invalid">
              Los emails no coinciden
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>{" "}
    </Form>
  );
};
