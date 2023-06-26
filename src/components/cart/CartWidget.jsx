import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {getTotalItems} = useContext(CartContext)
  let totalItems = getTotalItems()

  return (
    <div>
      <Link to={"/Cart"} >
      <span className="material-symbols-outlined">shopping_cart</span>
      </Link>
<span>{totalItems}</span>
    </div>
  )
}

export default CartWidget