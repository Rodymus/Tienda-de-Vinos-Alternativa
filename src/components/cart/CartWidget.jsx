import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {cart} = useContext(CartContext)

  return (
    <div>
      <Link to={"/Cart"} >
      <span className="material-symbols-outlined">shopping_cart</span>
      </Link>
<span>{cart.length === 0 ? 0 : cart.length}</span>
    </div>
  )
}

export default CartWidget