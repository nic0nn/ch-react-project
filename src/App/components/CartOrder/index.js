import React, { useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { useInput } from "../../hooks";
import { UserForm } from "../UserForm";

export const CartOrder = ({
  show,
  handleClose,
  handleSubmit,
  validated,
  setValidated,
}) => {
  const email = useInput();
  const name = useInput();
  const phone = useInput();
  const lastName = useInput();
  const reEmail = useInput();
  const ref = useRef();

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header>
        <Modal.Title>Terminar compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserForm
          formRef={ref}
          name={name}
          email={email}
          reEmail={reEmail}
          phone={phone}
          lastName={lastName}
          handleSubmit={handleSubmit}
          validated={validated}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>

        <Button
          variant="primary"
          type="submit"
          onClick={(event) => handleSubmit(event, ref.current)}
        >
          Comprar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
