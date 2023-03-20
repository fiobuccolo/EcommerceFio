
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
// react router
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// Toastify
import { ToastContainer} from 'react-toastify';
 // componentes
import { Navbar } from './Components/Navbar/Navbar';
import {ProductListContainer} from './Components/ProductListContainer/productListContainer';
import { ProductDetailContainer } from './Components/ProductDetailContainer/productDetailContainer';
import { Header } from './Components/header/header';
import { Checkout } from './Components/Checkout/checkout';
import { Cart } from './Components/Cart/cart';

// firebase
import { CargarBDD } from './utils/firebase';
import { getProducts } from './utils/firebase';
import { getCategories } from './utils/firebase';
import { deleteProduct } from './utils/firebase';
import { updateProduct } from './utils/firebase';

//context
import { CartProvider } from './Context/CartContext';

function App() {
  // Cuando quiera cargar los productos en la base de datos de firebase tengo que descomentar la linea de abajo. 
  //CargarBDD()
  getProducts()
  getCategories()
  return (
    <BrowserRouter>
        <CartProvider>
            <div className="App">
              <Navbar/>
              <Routes> 
                <Route path='/' element={<><Header/><ProductListContainer/></>} ></Route>
                
                <Route path='/category/:idCategory' element={<ProductListContainer/>}></Route>
                <Route path='/product/:id'  element={<ProductDetailContainer/>}></Route> 
                <Route path='/checkout'  element={<Checkout/>}></Route> 
                <Route path='/Cart'  element={<Cart/>}></Route> 
              </Routes>
            </div>
            <ToastContainer/>
        </CartProvider>
       
    </BrowserRouter>
  );
}

export default App;
