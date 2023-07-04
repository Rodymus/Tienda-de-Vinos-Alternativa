import { createContext, useState } from 'react';

export const CartContext = createContext();

//Creación del contexto
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    //preguntar si existe
    let exist = isInCart(newProduct.id);
    
    if (exist) {
      let newArray = cart.map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newProduct.quantity,
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

  //para limpiar el carrito facilmente
  const clearCart = () => {
    setCart([])
  }

  const removeById = (id) => {
    let newArray = cart.filter((product)=> product.id !== id)
    setCart(newArray)
  }

  const getTotalQuantityById = (id)=> {
    let producto = cart.find( prod => prod.id === id)
    return producto?.quantity
  }

  const getTotalItems =()=> {
    let total = cart.reduce((acc, elemento)=>{
      return acc + elemento.quantity
    }, 0)
    return total;
  }

  const getTotalPrice = ()=>{

    let total = cart.reduce((acc, elemento)=>{
      return acc + ( elemento.quantity * elemento.price )
    }, 0)
    return total
  }

  let data = {
    cart,
    addToCart,
    clearCart, 
    removeById,
    getTotalQuantityById,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
