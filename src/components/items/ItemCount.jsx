import { useCount } from "../hooks/useCount";
import { Button } from '@chakra-ui/react'

const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  
  return (
    <>
      <div className="count--container">
        <Button size='sm' onClick={decrement}>-</Button>
        <span>{count}</span>
        <Button size='sm' onClick={increment}>+</Button>

        <Button size='sm' onClick={() => onAdd(count)}>Agregar al carrito</Button>
      </div>
    
    </>
  );
};

export default ItemCount;