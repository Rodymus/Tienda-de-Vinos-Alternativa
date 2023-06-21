import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const { cart } = useContext(CartContext)


  return (
    <div>
      <h1>Su carro esta vacio</h1>
    </div>
  )
}

export default Cart