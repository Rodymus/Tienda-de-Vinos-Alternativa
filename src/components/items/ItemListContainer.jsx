import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { products } from '../../productsMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryN } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter((products) => products.category === categoryN);

    console.log(categoryN);

    const tarea = new Promise((resolve) => {
      resolve(categoryN ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryN]);

  {
    /*const catFilter = items.filter((item)=> item.category === category);*/
  }

  return <ItemList items={items} />
  
};

export default ItemListContainer;
