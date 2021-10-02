import React, { useContext, useState } from "react";

import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { CartInfo } from "../../components/CartInfo";
import { ShoppingCartContext } from "../../context/ShoppingCart";
import { Loading } from "./../../shared/Loading";
import { saveOrder } from "./../../firebase/utils";

import "./styles.scss";

export const CartInfoContainer = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const { clearCart, shoppingCart, getCartTotal } =
    useContext(ShoppingCartContext);

  const [validated, setValidated] = useState(false);

  const goBack = () => history.goBack();

  const generateOrder = (form) => {
    const f = new FormData(form)
    return {
      user: {
        name: f.get("name"),
        lastName: f.get("lastName"),
        email: f.get("email"),
        phone: f.get("phone"),
      },
      order: shoppingCart,
      total: getCartTotal(),
    };
  };

  const handleSaveOrder = async (form) => {
    (async () => {
      setLoading(true);
      const orderId = await saveOrder(generateOrder(form));
      Swal.fire({
        title: "Orden generada correctamente",
        text: "Su orden se generó correctamente. ¿Desea verla?",
        icon: "success",
        showCancelButton: true,
        cancelButtonText: "NO",
        confirmButtonText: "SI",
      }).then(({ isConfirmed, isDismissed }) => {
        setValidated(false);
        clearCart();
        setLoading(false);
        if (isConfirmed) history.push(`order/${orderId}`);
        if (isDismissed) history.push("/");
      });
    })();
  };
  const handleSubmit = (event, form) => {
    setValidated(true);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    handleSaveOrder(form);
  };

  if (!shoppingCart.length)
    return (
      <div className="empty-cart">
        <div>No hay productos en la canasta</div>
        <Link to="/">
          <Button>SEGUIR COMPRANDO!</Button>
        </Link>
      </div>
    );

  return (
    <Loading state={loading} size={40}>
      <CartInfo
        handleSubmit={handleSubmit}
        validated={validated}
        goBack={goBack}
      />
      ;
    </Loading>
  );
};
