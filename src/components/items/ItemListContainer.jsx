import ItemList from './ItemList';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryN } = useParams();

  useEffect(() => {

    let itemsCollection = collection(db, "products")

    let consulta;
    
    if(categoryN){
      consulta = query(itemsCollection, where("category", "==", categoryN))
    }else{
      consulta = itemsCollection
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
    
  }, [categoryN]);

  //if con return temprano - TECNICA DE RENDERING
  if (items.length === 0) {
    return (
      <center>
        <h1>
          <PacmanLoader color="#FFFF00" />
        </h1>
      </center>
    );
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
