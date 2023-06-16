import ItemList from "./ItemList";
import { useEffect, useState} from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  
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
  
  const catFilter = items.filter((item)=> item.category === category);
  
  return   (
    <div>
      {category ? <ItemList items={catFilter} /> : <ItemList items={items} />}
    </div>
  
  );
    
};

export default ItemListContainer ;