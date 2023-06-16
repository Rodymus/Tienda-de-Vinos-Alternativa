import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
      <Link to={"/Cart"} >
      <span class="material-symbols-outlined">shopping_cart</span>
      </Link>
<span>5</span>
    </div>
  )
}

export default CartWidget