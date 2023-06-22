import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { products } from '../../productsMock';
import { useParams } from 'react-router-dom';
import { PacmanLoader } from "react-spinners";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryN } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter((products) => products.category === categoryN);

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryN ? productosFiltrados : products);
      }, 2000);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryN]);

  //if con return temprano - TECNICA DE RENDERING
  if (items.length === 0) {
    return (
      <h1>
        <PacmanLoader color="#36d7b7" />
      </h1>
    );
  }

  return <ItemList items={items} />
  
};

export default ItemListContainer;
