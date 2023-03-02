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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path = "/" element = {<ItemListContainer/>}/>
      <Route exact path = "/item/:id" element = {<ItemDetailContainer/>}/>
      <Route exact path = "/category/libreria" element = {<Libreria/>}/>
      <Route exact path = "/category/papeleria" element = {<Papeleria/>}/>
      <Route exact path = "/category/jugueteria" element = {<Jugueteria/>}/>
      <Route exact path = "/category/marroquineria" element = {<Marroquineria/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

