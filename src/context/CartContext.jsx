import { createContext, useState } from 'react';

export const CartContext = createContext();

//Creación del contexto
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (newProduct) => {
    //preguntar si existe
    let exist = isInCart(newProduct.id);
    
    if (exist) {
      let newArray = cart.map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + newProduct.quantity,
          };
        } else {
          return product;
        }
      })
      setCart(newArray);

    } else {
      setCart([...cart, newProduct]);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([])
  }

  let data = {
    cart: cart,
    agregarAlCarrito: agregarAlCarrito,
    clearCart: clearCart,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
