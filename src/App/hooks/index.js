import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export const useShoppingCart = () => {
  const history = useHistory();

  const [shoppingCart, setShoppingCart] = useState([]);

  const isInCart = (_id) => {
    return shoppingCart.some((item) => item.product._id === _id);
  };

  const add = (item) => {
    if (isInCart(item.product._id)) {
      Swal.fire({
        icon: "error",
        title: "El producto ya se encuentra en el carrito",
        confirmButtonText: "Aceptar",
      }).then(() => {
        history.push("/");
      });
    } else {
      setShoppingCart([...shoppingCart, item]);
      Swal.fire({
        title: "Productos agregados correctamente",
        icon: "success",
        text: "¿Desea seguir comprando?",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Aceptar",
      }).then(({ isConfirmed, isDismissed }) => {
        if (isConfirmed) history.push("/");
        if (isDismissed) history.push("/cart");
      });
    }
  };

  const remove = ({ _id }) => {
    setShoppingCart(shoppingCart.filter((prod) => prod._id !== _id));
  };

  const empty = () => {
    setShoppingCart([]);
  };

  const count = () => {
    return shoppingCart.reduce((total, item) => (total += item.quantity), 0);
  };

  return [shoppingCart, add, remove, empty, count];
};

export const useCounter = (value) => {
  const [counter, setCounter] = useState(value);

  const add = () => {
    setCounter(counter + 1);
  };

  const remove = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return [counter, add, remove];
};
