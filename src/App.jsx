
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {ProductListContainer} from './Components/ProductListContainer/productListContainer';
import { ProductDetailContainer } from './Components/ProductDetailContainer/productDetailContainer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from './Components/header/header';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes> 
             <Route path='/' element={<><Header/><ProductListContainer/></>} ></Route>
             
             <Route path='/category/:idCategory' element={<ProductListContainer/>}></Route>
             <Route path='/product/:id'  element={<ProductDetailContainer/>}></Route> 
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
