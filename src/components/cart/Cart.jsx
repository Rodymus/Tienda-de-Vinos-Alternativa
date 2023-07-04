import { Divider } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Cart = () => {

  const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext)

  let total = getTotalPrice()

  const limpiar = ()=> {
    Swal.fire({ 
      title: 'Seguro quieres limpiar el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si, limpiar',
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Limpiado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se produjeron cambios', '', 'info')
      }
    })
  }

  return (
    <div>
      {
        cart.map( product =>  {
          return <div key= {product.id}>
            <h3>El total del carrito es: $ {total}</h3>
            <button onClick={limpiar}>Limpiar carrito</button>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <button onClick={()=>removeById(product.id)}>Eliminar</button>
            <Link to="/checkout">
                <button variant="contained">Finalizar compra</button>
            </Link>
          </div>
        })
      }
    </div>
  )
}

export default Cart