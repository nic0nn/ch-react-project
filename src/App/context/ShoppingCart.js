import { createContext } from "react";

import { useShoppingCart } from "../hooks";

export const ShoppingCartContext = createContext([]);

export const ShoppingCartProvider = ({ children }) => {
  const [
    shoppingCart,
    addProduct,
    removeProduct,
    clearCart,
    getCartQuantity,
    getCartTotal,
  ] = useShoppingCart();
  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addProduct,
        removeProduct,
        clearCart,
        getCartQuantity,
        getCartTotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
