import ItemList from "./ItemList";
import { useEffect, useState} from "react"
import { products } from "../../productsMock"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const tarea = new Promise((resolve) => {
      resolve(products);
      });
      
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
    
  }, []);
  
  
  return   (<ItemList items={items} />);
    
};

export default ItemListContainer ;