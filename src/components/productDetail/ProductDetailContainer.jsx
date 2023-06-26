import { useContext, useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';
import { products } from '../../productsMock';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { PacmanLoader } from 'react-spinners';

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
  };


  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      setTimeout(()=> {
        res(productFind);
      },1000);
      
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
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
