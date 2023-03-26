import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Libreria from './components/NavBar/Categorias/Libreria';
import Papeleria from './components/NavBar/Categorias/Papeleria';
import Jugueteria from './components/NavBar/Categorias/Jugueteria';
import Marroquineria from './components/NavBar/Categorias/Marroquineria';
import CartProvider from './components/CartContext/CartContext';
import CartView from './components/CartView'
import { initializeApp } from 'firebase/app';
import OrderForm from './components/OrderForm';

const firebaseConfig = {
  apiKey: "AIzaSyDIvclcXjRE6Or4dIxTZc1VHMmdbp3RbC8",
  authDomain: "react-ecommerce-3dd10.firebaseapp.com",
  projectId: "react-ecommerce-3dd10",
  storageBucket: "react-ecommerce-3dd10.appspot.com",
  messagingSenderId: "339222352640",
  appId: "1:339222352640:web:76a3f0f91717a023ef19e5"
};

const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path = "/" element = {<ItemListContainer/>}/>
      <Route exact path = "/item/:id" element = {<ItemDetailContainer/>}/>
      <Route exact path = "/category/libreria" element = {<Libreria/>}/>
      <Route exact path = "/category/papeleria" element = {<Papeleria/>}/>
      <Route exact path = "/category/jugueteria" element = {<Jugueteria/>}/>
      <Route exact path = "/category/marroquineria" element = {<Marroquineria/>}/>
      <Route exact path = "/detalle" element = {<CartView/>}/>
      <Route exact path = "/formulario" element = {<OrderForm/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

