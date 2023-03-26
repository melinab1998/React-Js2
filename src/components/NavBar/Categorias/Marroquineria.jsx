import React, {useEffect, useState} from 'react'
import ItemList from '../../ItemList';
import {getDocs, getFirestore, collection, where, query} from 'firebase/firestore'

const Marroquineria = () => {

  const [cat, setCat] = useState([])
    
  useEffect(() => {
    const db = getFirestore()

    const q = query(
      collection( db, 'items'),
      where('type','==', "Marroquineria")
    )

    getDocs(q).then((snapshot) => {
        if(snapshot === 0){
            console.log("No hay resultados")
        }
    setCat(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })
}, [])


    return (
      <div className="productos">
          {cat.map(items => {
          return <ItemList id={items.id} title={items.title} imageId={items.imageId} type={items.type} price={items.price} description={items.description} key={items.id}/>
          })}    
      </div>         
  )
}

export default Marroquineria
