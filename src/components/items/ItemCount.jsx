import { useState } from "react"

const ItemCount = () => {

const [count, setCount] = useState(0);

return (
<> 
  <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Agregar</button>
      <button onClick={() => setCount(count == 0)}>Resetear</button>
      <button onClick={() => setCount(count > 0 ? count -1 : null)}>Quitar</button>
</>  );

}

export default ItemCount