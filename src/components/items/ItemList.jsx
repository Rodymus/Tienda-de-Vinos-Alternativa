import { useParams } from "react-router-dom";
import ProductCard from '../../common/ProductCard';
import "./ItemList.css";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";

const ItemList = ({ items }) => {
  const { id } = useParams();

  const [poducto, setProducto] = useState([]);

  const itemFilter = items.filter((item) => item.id == id);


  return (
    <div>
      {items.map((elemento) => {
        return (
          <ProductCard key={elemento.id} elemento={elemento} />
        );
      })}
    </div>
  );
};

export default ItemList;
