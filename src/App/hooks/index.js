import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export const useShoppingCart = () => {
  const history = useHistory();

  const [shoppingCart, setShoppingCart] = useState([]);

  const isInCart = (id) => {
    return shoppingCart.some((product) => product.id === id);
  };

  const addProduct = (product) => {
    if (isInCart(product.id)) {
      Swal.fire({
        icon: "error",
        title: "El producto ya se encuentra en el carrito",
        confirmButtonText: "Aceptar",
      }).then(() => {
        history.goBack();
      });
    } else {
      setShoppingCart([
        ...shoppingCart,
        { ...product, total: product.quantity * product.price },
      ]);
      Swal.fire({
        title: "Productos agregados correctamente",
        icon: "success",
        text: "¿Desea seguir comprando?",
        showCancelButton: true,
        cancelButtonText: "NO",
        confirmButtonText: "SI",
      }).then(({ isConfirmed, isDismissed }) => {
        if (isConfirmed) history.push("/");
        if (isDismissed) history.push("/cart");
      });
    }
  };

  const removeProduct = ({ id }) => {
    setShoppingCart(shoppingCart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setShoppingCart([]);
  };

  const getCartQuantity = () => {
    return shoppingCart.reduce((total, item) => (total += item.quantity), 0);
  };

  const getCartTotal = () => {
    return shoppingCart.reduce(
      (total, item) => (total += item.quantity * item.price),
      0
    );
  };

  return [
    shoppingCart,
    addProduct,
    removeProduct,
    clearCart,
    getCartQuantity,
    getCartTotal,
  ];
};

export const useCounter = (value) => {
  const [counter, setCounter] = useState(value || 0);

  const add = () => {
    setCounter(counter + 1);
  };

  const remove = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return [counter, add, remove, setCounter];
};

export const useInput = () => {
  const [value, setValue] = useState();

  const onChange = (e) => {
    setValue(e.currentTarget.value);
  };

  return { value, onChange };
};
