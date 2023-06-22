import { ItemCount } from "../cart/ItemCount";

const ProductDetail = ({ productSelected, addToCart }) => {

  const onAdd = (cantidad) => {
    
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data)
  };

  return (
    <>
      <div>
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
      </div>
      {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h3>Sin stock</h3>
      )}
    </>
  );
};

export default ProductDetail;