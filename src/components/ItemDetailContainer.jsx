import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

  const [items, setItems] = useState([]);
  const {id} = useParams();

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
 
  const selectItem = items.find(product => product.id == id)
  console.log(selectItem)

  return (
  <div>
    {selectItem &&
    <ItemDetail id={selectItem.id} title={selectItem.title} imageId={selectItem.imageId} type={selectItem.type} price={selectItem.price} description={selectItem.description} key={selectItem.id}/>
    }
  </div>
  )
}

export default ItemDetailContainer
