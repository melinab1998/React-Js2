import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import {getDocs, getFirestore, collection} from 'firebase/firestore'


const ItemListContainer = () => {

  const [items, setItems] = useState([]);


  useEffect(() => {
      const db = getFirestore()
      const prodCollection = collection( db, 'items')

      getDocs(prodCollection).then((snapshot) => {
          if(snapshot === 0){
              console.log("No hay resultados")
          }
      setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      })
  }, [])
 
  return (
    <div>
      <div className="titulo">
      <h1 className="productos__tit">PRODUCTOS</h1>
      </div>
      <div className="productos">
      {items.map(items => {
        return <ItemList id={items.id} title={items.title} imageId={items.imageId} type={items.type} price={items.price} description={items.description} key={items.id}/>
      })}
      </div>
    </div>
  )
}

export default ItemListContainer
