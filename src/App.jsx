import './App.css';
import ItemListContainer from './components/items/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProductDetailContainer from "./components/productDetail/ProductDetailContainer";


const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    greeting={'Bienvenidos a la tienda de Vinos!!!'}
                  />
                }
              />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ItemListContainer />
      </ChakraProvider>
    </>
  );
};

export default App;
