import React, { useEffect, useState } from 'react'
import { getProducts } from '../data/data';
import ItemList from './ItemList';


const ItemListContainer = () => {

  const [listaProductos, setlistaProductos] = useState([]);
  
  useEffect(() => {
    getProducts()
    .then((res) => setlistaProductos(res))
    .catch((error) => alert(error))
  }, []);

 
  return (
    <div>
      <div className="titulo">
      <h1 className="productos__tit">PRODUCTOS</h1>
      </div>
      <div className="productos">
      {listaProductos.map(prod => {
        return <ItemList id={prod.id} name={prod.name} img={prod.img} type={prod.type} price={prod.price} des={prod.des} key={prod.id}/>
      })}
      </div>
    </div>
  )
}

export default ItemListContainer
