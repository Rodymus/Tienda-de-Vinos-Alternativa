import { useContext, useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { PacmanLoader } from 'react-spinners';
import Swal from 'sweetalert2'
import { db } from '../../firebaseConfig';
import { collection, getDoc, doc } from "firebase/firestore"


const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);
  
  const onAdd = (cantidad) => {
    
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado correctamente!',
      showConfirmButton: false,
      timer: 1000
    })
  };


  useEffect(() => {

    let itemsCollection = collection(db, "products")
    let refDoc = doc(itemsCollection, id )
    getDoc(refDoc).then(res =>{
      setProductSelect({...res.data(), id: res.id })
    });
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ProductDetail
          cantidad={cantidad}
          productSelected={productSelected}
          addToCart={addToCart}
          onAdd={onAdd}
        />
      ) : (
        <center>
          <h1>
            <PacmanLoader color="#FFFF00" />
          </h1>
        </center>
      )}
    </div>
  );
};

export default ProductDetailContainer;
