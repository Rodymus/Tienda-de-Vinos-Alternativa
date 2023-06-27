import './App.css';
import ItemListContainer from './components/items/ItemListContainer';
import { ChakraProvider, Checkbox } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProductDetailContainer from "./components/productDetail/ProductDetailContainer";
import Cart from './components/cart/Cart';
import CartContextProvider from './context/CartContext';
import FormFormik from './components/formFormik/FormFormik';


const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
        <CartContextProvider>
        <Layout />
            <Routes>
              <Route
                  path="/"
                  element={
                    <ItemListContainer
                      greeting={'Bienvenidos a la tienda de Vinos!!!'}
                    />
                  }
                />
                <Route path="/category/:categoryN" element={<ItemListContainer />} />
                <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/form" element={<FormFormik />} />
                
            </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

export default App;
