import { createContext } from "react";
import { useShoppingCart } from "../hooks";

export const ShoppingCart = createContext([]);

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, add, remove, empty, count] = useShoppingCart();

  return (
    <ShoppingCart.Provider value={{ shoppingCart, add, remove, empty, count }}>
      {children}
    </ShoppingCart.Provider>
  );
};
