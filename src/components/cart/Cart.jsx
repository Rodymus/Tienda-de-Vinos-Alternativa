import { Divider } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const { cart, clearCart } = useContext(CartContext)


  return (
    <div>
      {
        cart.map( product =>  {
          return <div key= {product.id}>
            <button onClick={clearCart}>Limpiar carrito</button>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
          </div>
        })
      }
    </div>
  )
}

export default Cart