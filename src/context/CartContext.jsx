import { createContext } from "react";

export const CartContext = createContext();

//Creación del contexto
const CartContextProvider = ({ children }) => {
  
  let data = {

  }
  
  return <CartContext.Provider value = { data }> {children} </CartContext.Provider>
};

export default CartContextProvider;