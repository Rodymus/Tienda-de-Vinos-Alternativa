import { Button, Divider, Stack, Text } from "@chakra-ui/react";
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
            <h3><Text as='b'>El total del carrito es: $ {total}</Text></h3>
            <h1>Resumen de su Carrito</h1>
            <Stack direction='row' spacing={2}><h3>{product.quantity}</h3><h3>{product.title}</h3><h3>$ {product.price}</h3>
            </Stack>
            <Stack direction='row' spacing={4} align='center'>
            <br></br>
            <Button onClick={limpiar}>Limpiar carrito</Button>
            <Button onClick={()=>removeById(product.id)}>Eliminar</Button>
            <Link to="/checkout">
                <Button >Finalizar compra</Button>
            </Link></Stack>
          </div>
        })
      }
    </div>
  )
}

export default Cart