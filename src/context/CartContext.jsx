import { createContext } from "react";

export const CartContext = createContext();

//Creación del contexto
const CartContextProvider = ({ children }) => {
  return <CartContext.Provider> {children} </CartContext.Provider>
};

export default CartContextProvider;